import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Définition du schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Adresse e-mail invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

// Type des données du formulaire basé sur le schéma
type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Fonction de soumission du formulaire
  const onSubmit = (data: ContactFormData) => {
    // Traitement des données (par exemple, envoi à une API)
    console.log(data);
  };

  return (
    <div id="Contact" className="p-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contactez-moi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Nom</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-white rounded hover:bg-accent-dark transition"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;