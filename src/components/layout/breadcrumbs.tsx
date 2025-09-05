import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    'offers': 'Offers',
    'accounts': 'Accounts',
    'transactions': 'Transactions',
    'distributions': 'Distributions',
    'redemptions': 'Redemptions',
    'reports': 'Reports',
    'settings': 'Configuration',
    'form-category': 'Form Category',
    'form-type': 'Form Type',
    'form-library': 'Form Library',
    'esign': 'Esign Document',
    'payment-details': 'Payment Details',
    'email-template': 'Email Template',
    'sms-template': 'SMS Template',
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1.5">
              <Home className="h-3.5 w-3.5" />
              Dashboard
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <div key={name} className="flex items-center gap-1.5">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={routeTo}>{displayName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}