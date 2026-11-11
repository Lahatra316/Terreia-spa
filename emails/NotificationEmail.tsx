// emails/NotificationEmail.tsx
import * as React from 'react';
import { Html, Body, Container, Text, Heading, Hr, Section } from '@react-email/components';

interface NotificationEmailProps {
  type: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  treatmentName?: string;
  treatmentPrice?: string;
  preferredDate?: string;
  eventType?: string;
  guestCount?: string;
  itemType?: string;
  contactReason?: string; // <-- NOUVEAU
  callbackTime?: string;  // <-- NOUVEAU
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  type, name, email, phone, message, treatmentName, treatmentPrice, preferredDate, eventType, guestCount, itemType, contactReason, callbackTime
}) => (
  <Html lang="fr">
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nouvelle demande : {type}</Heading>
        <Text style={text}>Une nouvelle action a été effectuée sur le site Terreia Spa.</Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Nom :</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>Email :</Text>
          <Text style={value}>{email}</Text>
          
          {phone && (
            <>
              <Text style={label}>Téléphone :</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}

          {contactReason && (
            <>
              <Text style={label}>Motif de la demande :</Text>
              <Text style={value}>{contactReason}</Text>
            </>
          )}

          {callbackTime && (
            <>
              <Text style={label}>Créneau de rappel souhaité :</Text>
              <Text style={value}>{callbackTime}</Text>
            </>
          )}
          
          {treatmentName && (
            <>
              <Text style={label}>{itemType || 'Prestation'} réservé(e) :</Text>
              <Text style={value}>{treatmentName} ({treatmentPrice})</Text>
            </>
          )}

          {preferredDate && (
            <>
              <Text style={label}>Date souhaitée :</Text>
              <Text style={value}>{preferredDate}</Text>
            </>
          )}

          {eventType && (
            <>
              <Text style={label}>Type d'événement :</Text>
              <Text style={value}>{eventType}</Text>
            </>
          )}

          {guestCount && (
            <>
              <Text style={label}>Nombre d'invités :</Text>
              <Text style={value}>{guestCount}</Text>
            </>
          )}

          {message && (
            <>
              <Text style={label}>Message / Détails :</Text>
              <Text style={value}>{message}</Text>
            </>
          )}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>L'équipe Terreia Spa</Text>
      </Container>
    </Body>
  </Html>
);

const main = { backgroundColor: '#fcf9f8', fontFamily: 'Arial, sans-serif' };
const container = { backgroundColor: '#ffffff', margin: '0 auto', padding: '20px', borderRadius: '8px', maxWidth: '600px' };
const heading = { fontSize: '24px', color: '#466648', marginBottom: '20px' };
const text = { fontSize: '16px', color: '#1b1c1c', lineHeight: '1.5' };
const label = { fontSize: '14px', color: '#625e52', fontWeight: 'bold', marginBottom: '4px' };
const value = { fontSize: '16px', color: '#1b1c1c', marginTop: '0', marginBottom: '16px' };
const hr = { borderColor: '#e4e2e1', margin: '20px 0' };
const footer = { fontSize: '12px', color: '#888', textAlign: 'center' as const, marginTop: '20px' };