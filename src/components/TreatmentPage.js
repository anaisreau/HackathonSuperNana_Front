import React from 'react';
import SearchBar from './SearchBar'
import DentistCard from './DentistCard';
import ProcreationCard from './ProcreationCard'
import SurgeryCard from './SurgeryCard'
import WeightCard from './WeightCard';
import { Container } from 'semantic-ui-react'
import './TreatmentPage.css';



function TreatmentPage() {
  return (
    <>
      <SearchBar />

        <Container className='cardsContainer'>
            <Container className='cards'>
                <DentistCard />
                <ProcreationCard />
            </Container>

            <Container className='cards'>
                <SurgeryCard />
                <WeightCard />
            </Container>

        </Container>
    </>
  );
}

export default TreatmentPage;