import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Plus, FileDown, Eye } from "lucide-react";
import { mockAccounts } from "@/lib/mock-data";

export default function AccountsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Accounts</h1>
          <p className="text-muted-foreground">Manage investor accounts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Account
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search accounts..." className="pl-9" />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investor Name</TableHead>
                    <TableHead>Account ID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>KYC Status</TableHead>
                    <TableHead>Account Type</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                    <TableHead>Currency</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockAccounts.map((account, index) => (
                    <motion.tr
                      key={account.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="hover:bg-muted/50"
                    >
                      <TableCell className="font-medium text-primary hover:underline cursor-pointer">
                        {account.investorName}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {account.id}
                      </TableCell>
                      <TableCell>{account.email}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={account.kycStatus === 'auto_approved' ? 'default' : 'secondary'}
                          className={account.kycStatus === 'auto_approved' ? 'bg-success text-success-foreground' : ''}
                        >
                          {account.kycStatus === 'auto_approved' ? 'Auto Approved' : account.kycStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="capitalize">{account.accountType}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${account.balance.toLocaleString()}
                      </TableCell>
                      <TableCell>{account.currency}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {account.lastActivity ? new Date(account.lastActivity).toLocaleDateString() : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}