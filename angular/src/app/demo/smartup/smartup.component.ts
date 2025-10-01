import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface SubMenuItem {
  id: string;
  label: string;
}

interface MenuItem {
  id: string;
  label: string;
  subItems: SubMenuItem[];
}

@Component({
  selector: 'app-smartup',
  templateUrl: './smartup.component.html',
  styleUrls: ['./smartup.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SmartupComponent implements OnInit, OnDestroy {
  currentDateTime: string = '';
  activeMenu: string = '';
  expandedMenus: Set<string> = new Set();
  private intervalId: any;

  menuItems: MenuItem[] = [
    {
      id: 'parametrage',
      label: 'Paramétrage de base',
      subItems: [
        { id: 'equipage-transport', label: 'Equipage de transport' },
        { id: 'equipe-operation', label: 'Equipe d\'opération' },
        { id: 'circuit-transport', label: 'Circuit de transport' },
        { id: 'planning-circuit', label: 'Planning de circuit' },
        { id: 'planning-transport', label: 'Planning de transport' }
      ]
    },
    {
      id: 'sessions',
      label: 'Sessions',
      subItems: [
        { id: 'sessions-journee-travail', label: 'Journées de travail' },
        { id: 'sessions-transport', label: 'Session transport' },
        { id: 'sessions-billets', label: 'Sessions billets' },
        { id: 'sessions-monnaie', label: 'Sessions monnaie' },
        { id: 'sessions-caisse', label: 'Sessions caisse' }
      ]
    },
    {
      id: 'commandes',
      label: 'Traitement des commandes',
      subItems: [
        { id: 'commande-clients', label: 'Commande Clients' },
        { id: 'commande-transports', label: 'Commande Transports' },
        { id: 'commande-billets', label: 'Commandes Billets' },
        { id: 'commande-monnaie', label: 'Commandes monnaie' },
        { id: 'commande-dab-monnaie', label: 'Commandes dab monnaie' },
        { id: 'commande-dab-billets', label: 'Commandes dab billets' }
      ]
    },
    {
      id: 'transports',
      label: 'Traitement des transports',
      subItems: [
        { id: 'traitement-tournees', label: 'Traitement tournées' },
        { id: 'alimentation-fourniture', label: 'Alimentation fourniture' },
        { id: 'sortie-tournees', label: 'Sortie tournées' },
        { id: 'reception-caisse', label: 'Réception caisse' },
        { id: 'traitement-remises', label: 'Traitement des remises' },
        { id: 'retour-tournee', label: 'Retour  tournée' },
        { id: 'suivi-temps-reel', label: 'Suivi en temps réel' },
        { id: 'gestion-passages', label: 'Gestion des passages' },
        { id: 'passage-bct', label: 'Passage BCT' }
      ]
    },
    {
      id: 'traitement-billet',
      label: 'Traitement billet',
      subItems: [
        { id: 'alimentation-billet', label: 'Alimentation billet' },
        { id: 'transfert-caisse-billet', label: 'Transfert vers caisse' },
        { id: 'demande-comptage-billet', label: 'Demande des comptages' },
        { id: 'preparation-comptage-billet', label: 'Préparation de comptage' },
        { id: 'feuille-distribution-billet', label: 'Feuille de distribution' },
        { id: 'resultat-comptage-billet', label: 'Résultat de comptage' },
        { id: 'suivi-alimentation-billet', label: 'Suivi des alimentations billet' },
        { id: 'blocage-deblocage-billet', label: 'Blocages et déblocages' },
        { id: 'cheque-retrait-billet', label: 'Chèque de retrait' },
        { id: 'versement-billet', label: 'Versement' },
        { id: 'ordre-passage-bct-billet', label: 'Ordre de passage BCT' },
        { id: 'bordereau-versement-billet', label: 'Bordereau de versement' },
        { id: 'alimentation-compensation-billet', label: 'Alimentation caisse de compensation' },
        { id: 'alimentation-fond-roulement-billet', label: 'Alimentation fond de roulement' },
        { id: 'cloture-journee-billet', label: 'Clôture journée' },
        { id: 'editions-billet', label: 'Éditions' }
      ]
    },
    {
      id: 'traitement-monnaie',
      label: 'Traitement monnaie',
      subItems: [
        { id: 'alimentation-monnaie', label: 'Alimentation monnaie' },
        { id: 'transfert-caisse-monnaie', label: 'Transfert vers caisse' },
        { id: 'demande-comptage-monnaie', label: 'Demande des comptages' },
        { id: 'preparation-comptage-monnaie', label: 'Préparation de comptage' },
        { id: 'feuille-distribution-monnaie', label: 'Feuille de distribution' },
        { id: 'resultat-comptage-monnaie', label: 'Résultat de comptage' },
        { id: 'blocage-deblocage-monnaie', label: 'Blocages et déblocages' },
        { id: 'suivi-alimentation-monnaie', label: 'Suivi des alimentations monnaie' },
        { id: 'cheque-retrait-monnaie', label: 'Chèque de retrait' },
        { id: 'versement-monnaie', label: 'Versement' },
        { id: 'ordre-passage-bct-monnaie', label: 'Ordre de passage BCT' },
        { id: 'bordereau-versement-monnaie', label: 'Bordereau de versement' },
        { id: 'alimentation-fond-roulement-monnaie', label: 'Alimentation fond de roulement' },
        { id: 'alimentation-compensation-monnaie', label: 'Alimentation caisse de compensation' },
        { id: 'cloture-journee-monnaie', label: 'Clôture journée' },
        { id: 'editions-monnaie', label: 'Éditions' }
      ]
    },
    {
      id: 'dab',
      label: 'Traitement DAB',
      subItems: [
        { id: 'dab-chargement-billet', label: 'Chargement billet' },
        { id: 'dab-transfert-caisse-billet', label: 'Transfert vers caisse billet' },
        { id: 'dab-chargement-monnaie', label: 'Chargement monnaie' },
        { id: 'dab-transfert-caisse-monnaie', label: 'Transfert vers caisse monnaie' },
        { id: 'dab-suivi-chargement-billet', label: 'Suivi des chargements billet' },
        { id: 'dab-suivi-chargement-monnaie', label: 'Suivi des chargements monnaie' }
      ]
    },
    {
      id: 'remise',
      label: 'Salle de remise',
      subItems: [
        { id: 'bordereau-remise', label: 'Bordereau des remises' },
        { id: 'reception-alimentation-billet', label: 'Réception alimentation billet' },
        { id: 'reception-alimentation-monnaie', label: 'Réception alimentation monnaie' },
        { id: 'reception-chargement-dab-billet', label: 'Réception chargement DAB billet' },
        { id: 'reception-chargement-dab-monnaie', label: 'Réception chargement DAB monnaie' },
        { id: 'reception-retour-tournee', label: 'Réception retour tournée' },
        { id: 'saisie-reprise-tournee', label: 'Saisie des reprise tournée' },
        { id: 'blocage-retour', label: 'Blocage et retour' },
        { id: 'saisie-detaillee-objets', label: 'Saisie des détaillés reprise objets' },
        { id: 'saisie-detaillee-fonds', label: 'Saisie des détaillés reprise fonds' },
        { id: 'demande-comptage-remise-billet', label: 'Demande des comptages billet' },
        { id: 'demande-comptage-remise-monnaie', label: 'Demande des comptages monnaie' },
        { id: 'ordre-passage-bct-remise', label: 'Ordre de passage BCT' },
        { id: 'retour-bct-remise', label: 'Retour BCT' },
        { id: 'suivi-collectes', label: 'Suivie des collectes' },
        { id: 'editions-remise', label: 'Editions' }
      ]
    },
    {
      id: 'contrats',
      label: 'Contrats client(Consulter)',
      subItems: []
    }
  ];


  constructor(private router: Router) {
    this.updateDateTime();
  }

  ngOnInit(): void {
    // Update date/time every second
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Clear interval when component is destroyed to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    this.currentDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  // Toggle menu expansion
  toggleMenu(menuId: string, event: Event): void {
    event.preventDefault();
    
    // Special handling for contrats menu - navigate instead of toggle
    if (menuId === 'contrats') {
      this.router.navigate(['/smartup/contrats-client']);
      return;
    }
    
    if (this.expandedMenus.has(menuId)) {
      this.expandedMenus.delete(menuId);
    } else {
      this.expandedMenus.add(menuId);
    }
    console.log(`Menu toggled: ${menuId}`);
  }

  // Check if menu is expanded
  isMenuExpanded(menuId: string): boolean {
    return this.expandedMenus.has(menuId);
  }

  // Set active menu (for sub-menu items)
  setActiveMenu(event: Event, menuName: string): void {
    event.preventDefault();
    this.activeMenu = menuName;
    console.log(`Menu changed to: ${menuName}`);
    // Additional menu handling logic can be added here
  }

  // Button action methods
  onInherit(): void {
    console.log('Inherit button clicked');
    // Implement inheritance functionality here
  }

  onAdmin(): void {
    console.log('Admin button clicked');
    // Implement admin functionality here
  }

  onHelp(): void {
    console.log('Help button clicked');
    // Implement help functionality here
  }

  // Check if any child route is currently active
  isRouteActive(): boolean {
    return this.router.url.includes('/smartup/') && this.router.url !== '/smartup' && this.router.url !== '/smartup/';
  }
}