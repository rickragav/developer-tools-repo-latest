import { Routes } from '@angular/router'
import { DashboardComponent } from './admin/dashboard/dashboard.component'

const PagesRouting: Routes = [
	// {
	//     path: 'dashboard',
	//     loadChildren: () =>
	//         import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
	// },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'books/current-files', component: DashboardComponent },
	{ path: 'books/download', component: DashboardComponent },
	{ path: 'books/trash', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '**', redirectTo: 'error/404' },
]

export { PagesRouting }