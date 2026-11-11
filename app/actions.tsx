// app/actions.tsx
'use server';

import { Resend } from 'resend';
import { NotificationEmail } from '@/emails/NotificationEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ActionState = {
  success: boolean;
  message?: string;
  error?: string;
} | null;

export async function submitForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const type = formData.get('type') as string || 'Newsletter';
  const name = formData.get('name') as string || 'Inconnu';
  const email = formData.get('email') as string;
  const message = formData.get('message') as string | undefined;
  const phone = formData.get('phone') as string | undefined;

  if (!email || !email.includes('@')) {
    return { success: false, error: 'Veuillez fournir une adresse email valide.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Terreia Spa <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'ton-adresse-email@exemple.com'],
      subject: `Nouvelle demande : ${type}`,
      react: <NotificationEmail type={type} name={name} email={email} message={message} phone={phone} />,
    });

    if (error) {
      console.error('Erreur Resend (submitForm):', error);
      return { success: false, error: 'Une erreur est survenue lors de l\'envoi.' };
    }

    return { success: true, message: 'Votre demande a bien été envoyée !' };
  } catch (error) {
    console.error('Erreur serveur (submitForm):', error);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
  }
}

export async function submitReservation(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | undefined;
  const treatmentName = formData.get('treatmentName') as string;
  const treatmentPrice = formData.get('treatmentPrice') as string;
  const preferredDate = formData.get('preferredDate') as string | undefined;
  const itemType = formData.get('itemType') as string || 'Prestation';

  if (!email || !name || !treatmentName) {
    return { success: false, error: 'Veuillez remplir les champs obligatoires (Nom, Email).' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Terreia Spa <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'ton-adresse-email@exemple.com'],
      subject: `Nouvelle réservation de ${itemType.toLowerCase()} : ${treatmentName}`,
      react: <NotificationEmail 
        type={`Réservation de ${itemType.toLowerCase()}`} 
        name={name} 
        email={email} 
        phone={phone} 
        treatmentName={treatmentName} 
        treatmentPrice={treatmentPrice} 
        preferredDate={preferredDate} 
        itemType={itemType}
      />,
    });

    if (error) {
      console.error('Erreur Resend (submitReservation):', error);
      return { success: false, error: 'Une erreur est survenue lors de l\'envoi de la réservation.' };
    }

    return { success: true, message: 'Votre demande de réservation a bien été envoyée !' };
  } catch (error) {
    console.error('Erreur serveur (submitReservation):', error);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
  }
}

export async function submitBespokeRequest(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | undefined;
  const eventType = formData.get('eventType') as string;
  const guestCount = formData.get('guestCount') as string;
  const message = formData.get('message') as string | undefined;

  const name = `${firstName} ${lastName}`;

  if (!email || !name) {
    return { success: false, error: 'Veuillez remplir les champs obligatoires.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Terreia Spa <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'ton-adresse-email@exemple.com'],
      subject: `Nouvelle demande sur-mesure : ${eventType}`,
      react: <NotificationEmail 
        type="Demande sur-mesure" 
        name={name} 
        email={email} 
        phone={phone} 
        eventType={eventType}
        guestCount={guestCount}
        message={message} 
      />,
    });

    if (error) {
      console.error('Erreur Resend (submitBespokeRequest):', error);
      return { success: false, error: 'Une erreur est survenue lors de l\'envoi.' };
    }

    return { success: true, message: 'Votre demande a bien été transmise à notre Concierge Bien-Être.' };
  } catch (error) {
    console.error('Erreur serveur (submitBespokeRequest):', error);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
  }
}

export async function submitTableReservation(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const type = formData.get('type') as string || 'Réservation de Table';
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const date = formData.get('date') as string;
  const time = formData.get('time') as string;
  const guests = formData.get('guests') as string;
  const message = formData.get('message') as string | undefined;

  if (!email || !name || !date || !time) {
    return { success: false, error: 'Veuillez remplir les champs obligatoires.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Terreia Spa <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'ton-adresse-email@exemple.com'],
      subject: `Nouvelle demande : ${type} le ${date}`,
      react: <NotificationEmail 
        type={type} 
        name={name} 
        email={email} 
        message={message} 
        preferredDate={`${date} à ${time} (${guests} personne(s))`} 
      />,
    });

    if (error) {
      console.error('Erreur Resend (submitTableReservation):', error);
      return { success: false, error: 'Une erreur est survenue lors de l\'envoi.' };
    }

    return { success: true, message: 'Votre demande de table a bien été envoyée !' };
  } catch (error) {
    console.error('Erreur serveur (submitTableReservation):', error);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
  }
}

// 5. Action pour la page Contact
export async function submitContactMessage(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | undefined;
  const contactReason = formData.get('contactReason') as string;
  const callbackTime = formData.get('callbackTime') as string;
  const message = formData.get('message') as string | undefined;

  if (!email || !name) {
    return { success: false, error: 'Veuillez remplir les champs obligatoires.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Terreia Spa <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO || 'ton-adresse-email@exemple.com'],
      subject: `Nouveau message de la conciergerie : ${contactReason}`,
      react: <NotificationEmail 
        type="Message Conciergerie" 
        name={name} 
        email={email} 
        phone={phone} 
        contactReason={contactReason}
        callbackTime={callbackTime}
        message={message} 
      />,
    });

    if (error) {
      console.error('Erreur Resend (submitContactMessage):', error);
      return { success: false, error: 'Une erreur est survenue lors de l\'envoi.' };
    }

    return { success: true, message: 'Votre message est parvenu à l\'intendance de Terreia. Un majordome de bain vous contactera sans délai.' };
  } catch (error) {
    console.error('Erreur serveur (submitContactMessage):', error);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
  }
}