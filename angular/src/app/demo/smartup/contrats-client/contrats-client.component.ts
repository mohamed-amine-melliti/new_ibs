import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Contract {
  client: string;
  abreviation: string;
  refContrat: string;
  dateDebut: string;
  dateFin: string;
  dateSignature: string;
  exonerationTi: string;
  exonerationTva: string;
  fondRoulement: string;
  mntMarche: string;
  modeleCommande: string;
  statut: string;
}

export interface SearchCriteria {
  client: string;
  dateDebut: string;
  dateFin: string;
  dateSignature: string;
  statut: string;
}

@Component({
  selector: 'app-contrats-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contrats-client.component.html',
  styleUrls: ['./contrats-client.component.scss']
})
export class ContratsClientComponent implements OnInit {
  searchSectionExpanded = true;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedContract: Contract | null = null;

  searchCriteria: SearchCriteria = {
    client: '',
    dateDebut: '',
    dateFin: '',
    dateSignature: '',
    statut: ''
  };

  contracts: Contract[] = [
    {
      client: 'PSPR0113',
      abreviation: 'MICROCRED',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'PSPR0117',
      abreviation: 'NEWREST',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Oui',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ27',
      abreviation: 'BTS',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'SPR0142',
      abreviation: 'WAFACASH',
      refContrat: 'C202311001',
      dateDebut: '01/08/2023',
      dateFin: '01/08/2025',
      dateSignature: '01/08/2023',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ10',
      abreviation: 'STB',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'RF',
      abreviation: 'RF',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Oui',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ16',
      abreviation: 'CITI',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ04',
      abreviation: 'ATT BANK',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ21',
      abreviation: 'TSB',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ14',
      abreviation: 'BH',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ01',
      abreviation: 'ATB',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    },
    {
      client: 'BNQ08',
      abreviation: 'BIAT',
      refContrat: '',
      dateDebut: '01/01/2018',
      dateFin: '31/12/2025',
      dateSignature: '01/01/2019',
      exonerationTi: 'Non',
      exonerationTva: 'Non',
      fondRoulement: '',
      mntMarche: '',
      modeleCommande: 'Agence bancaire avec DAB',
      statut: 'En cours'
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  toggleSearchSection(): void {
    this.searchSectionExpanded = !this.searchSectionExpanded;
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  getFilteredContracts(): Contract[] {
    let filtered = [...this.contracts];

    // Filter by client
    if (this.searchCriteria.client) {
      const searchTerm = this.searchCriteria.client.toLowerCase();
      filtered = filtered.filter(c => 
        c.client.toLowerCase().includes(searchTerm) ||
        c.abreviation.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by status
    if (this.searchCriteria.statut) {
      filtered = filtered.filter(c => c.statut === this.searchCriteria.statut);
    }

    // Filter by date range
    if (this.searchCriteria.dateDebut) {
      filtered = filtered.filter(c => {
        const contractDate = this.parseDate(c.dateDebut);
        const searchDate = new Date(this.searchCriteria.dateDebut);
        return contractDate >= searchDate;
      });
    }

    if (this.searchCriteria.dateFin) {
      filtered = filtered.filter(c => {
        const contractDate = this.parseDate(c.dateFin);
        const searchDate = new Date(this.searchCriteria.dateFin);
        return contractDate <= searchDate;
      });
    }

    // Sort
    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const aValue = a[this.sortColumn as keyof Contract];
        const bValue = b[this.sortColumn as keyof Contract];
        
        let comparison = 0;
        if (aValue < bValue) {
          comparison = -1;
        } else if (aValue > bValue) {
          comparison = 1;
        }
        
        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }

  selectContract(contract: Contract): void {
    this.selectedContract = contract;
    console.log('Selected contract:', contract);
  }

  exportToExcel(): void {
    console.log('Exporting to Excel...');
    // Implement Excel export functionality
    alert('Export to Excel feature will be implemented');
  }

  print(): void {
    console.log('Printing...');
    window.print();
  }

  private parseDate(dateStr: string): Date {
    // Parse DD/MM/YYYY format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
    return new Date();
  }
}

