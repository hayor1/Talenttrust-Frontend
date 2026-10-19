import type { Metadata } from 'next';
import { ReputationLookup } from '@/components/ReputationLookup';

export const metadata: Metadata = { title: 'Reputation' };

export default function ReputationPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Freelancer reputation</h1>
        <p>Ratings are issued only for completed escrows, so every point is backed by paid, delivered work.</p>
      </div>
      <ReputationLookup />
    </div>
  );
}
