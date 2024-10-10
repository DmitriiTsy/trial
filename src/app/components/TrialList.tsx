import React from 'react';
import { ClinicalTrial } from '../components/types/ClinicalTrial';

interface TrialListProps {
  trials: ClinicalTrial[];
}

const TrialList: React.FC<TrialListProps> = ({ trials }) => {
    console.log(trials)
    return (
      <div className="w-full max-w-4xl">
        {trials.map((trial) => (
          <div key={trial.nctId} className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{trial && trial.briefTitle}</h2>
            <p className="text-gray-600 mb-2">{trial && trial.officialTitle}</p>
            <p className="text-sm text-gray-500">NCT ID: {trial && trial.nctId}</p>
          </div>
        ))}
      </div>
    );
  };

export default TrialList;