import React, { useState, useEffect } from 'react';
import { ClinicalTrial } from '../components/types/ClinicalTrial';
import clinicalTrialsData from '../ctg-studies.json';

interface SearchBarProps {
    setSearchResults: (results: ClinicalTrial[]) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [clinicalTrials, setClinicalTrials] = useState<ClinicalTrial[]>([]);
  
    useEffect(() => {
      setClinicalTrials(clinicalTrialsData);
    }, []);
  
    const handleSearch = () => {
      if (!clinicalTrials) return;
      const results = clinicalTrials.filter((trial) => {
        const briefTitle = trial?.protocolSection?.identificationModule?.briefTitle?.toLowerCase() || '';
        const officialTitle = trial?.protocolSection?.identificationModule?.officialTitle?.toLowerCase() || '';
        const searchTermLower = searchTerm.toLowerCase();
        return briefTitle.includes(searchTermLower) || officialTitle.includes(searchTermLower);
      }).map(trial => ({
        nctId: trial?.protocolSection?.identificationModule?.nctId || '',
        briefTitle: trial?.protocolSection?.identificationModule?.briefTitle || '',
        officialTitle: trial?.protocolSection?.identificationModule?.officialTitle || '',
      }));
      setSearchResults(results);
    };
  
    return (
      <div className="w-full max-w-2xl mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search clinical trials..."
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <button
          onClick={handleSearch}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    );
  }

export default SearchBar;