import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CartComponent } from "./components/cart/cart.component";
import { AddProductComponent } from "./components/admin/product/add-product/add-product.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { AdminProductComponent } from "./components/admin/product/admin-product/admin-product.component";
import { AddBrandComponent } from "./components/admin/brand/add-brand/add-brand.component";
import { AdminBrandComponent } from "./components/admin/brand/admin-brand/admin-brand.component";
import { UserFormComponent } from "./components/admin/user/user-form/user-form.component";
import { AdminUserComponent } from "./components/admin/user/admin-user/admin-user.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductComponent } from "./components/product/product.component";
import { AdminCategoryComponent } from "./components/admin/category/admin-category/admin-category.component";
import { CategoryFormComponent } from "./components/admin/category/category-form/category-form.component";

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'cart', component: CartComponent },
	{ path: 'admin/activities/form', component: AddProductComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/activities/:id', component: AddProductComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/activities', component: AdminProductComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/villes/form', component: AddBrandComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/villes/:id', component: AddBrandComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/villes', component: AdminBrandComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/users/form', component: UserFormComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/users/:id', component: UserFormComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/users', component: AdminUserComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/domaines/form', component: CategoryFormComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/domaines/:id', component: CategoryFormComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'admin/domaines', component: AdminCategoryComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: 'activities', component: ProductComponent, canActivate: [AuthGuard] },
	{ path: 'activitie/details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
	{ path: 'contactus', component: ContactUsComponent },
	{ path: '**', component: NotFoundComponent }
]