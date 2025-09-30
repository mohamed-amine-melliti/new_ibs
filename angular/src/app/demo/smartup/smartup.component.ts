import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule]
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
        { id: 'param-general', label: 'Paramètres généraux' },
        { id: 'param-utilisateurs', label: 'Gestion des utilisateurs' },
        { id: 'param-roles', label: 'Gestion des rôles' },
        { id: 'param-config', label: 'Configuration système' }
      ]
    },
    {
      id: 'sessions',
      label: 'Sessions',
      subItems: [
        { id: 'sessions-actives', label: 'Sessions actives' },
        { id: 'sessions-historique', label: 'Historique des sessions' },
        { id: 'sessions-rapports', label: 'Rapports de sessions' }
      ]
    },
    {
      id: 'commandes',
      label: 'Traitement des commandes',
      subItems: [
        { id: 'commandes-nouvelles', label: 'Nouvelles commandes' },
        { id: 'commandes-encours', label: 'Commandes en cours' },
        { id: 'commandes-terminees', label: 'Commandes terminées' },
        { id: 'commandes-annulees', label: 'Commandes annulées' }
      ]
    },
    {
      id: 'transports',
      label: 'Traitement des transports',
      subItems: [
        { id: 'transport-planification', label: 'Planification' },
        { id: 'transport-suivi', label: 'Suivi des transports' },
        { id: 'transport-vehicules', label: 'Gestion des véhicules' },
        { id: 'transport-chauffeurs', label: 'Gestion des chauffeurs' }
      ]
    },
    {
      id: 'billet',
      label: 'Traitement billet',
      subItems: [
        { id: 'billet-reception', label: 'Réception des billets' },
        { id: 'billet-verification', label: 'Vérification' },
        { id: 'billet-tri', label: 'Tri et comptage' },
        { id: 'billet-stockage', label: 'Stockage' }
      ]
    },
    {
      id: 'monnaie',
      label: 'Traitement monnaie',
      subItems: [
        { id: 'monnaie-reception', label: 'Réception des monnaies' },
        { id: 'monnaie-comptage', label: 'Comptage' },
        { id: 'monnaie-preparation', label: 'Préparation' },
        { id: 'monnaie-distribution', label: 'Distribution' }
      ]
    },
    {
      id: 'dab',
      label: 'Traitement DAB',
      subItems: [
        { id: 'dab-approvisionnement', label: 'Approvisionnement DAB' },
        { id: 'dab-maintenance', label: 'Maintenance' },
        { id: 'dab-incidents', label: 'Gestion des incidents' },
        { id: 'dab-statistiques', label: 'Statistiques' }
      ]
    },
    {
      id: 'transfer',
      label: 'Salle de transfert',
      subItems: [
        { id: 'transfer-entree', label: 'Transferts entrée' },
        { id: 'transfer-sortie', label: 'Transferts sortie' },
        { id: 'transfer-validation', label: 'Validation' },
        { id: 'transfer-historique', label: 'Historique' }
      ]
    },
    {
      id: 'contrats',
      label: 'Contrats client(Consulter)',
      subItems: [
        { id: 'contrats-actifs', label: 'Contrats actifs' },
        { id: 'contrats-archives', label: 'Contrats archivés' },
        { id: 'contrats-recherche', label: 'Recherche de contrats' }
      ]
    }
  ];

  constructor() {
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
}