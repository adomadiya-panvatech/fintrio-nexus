import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Edit, Copy, Eye } from "lucide-react";

const emailTemplates = [
  { 
    id: 1, 
    name: "Welcome Email", 
    subject: "Welcome to Fintrio", 
    type: "onboarding",
    status: "active",
    lastModified: "2024-11-15"
  },
  { 
    id: 2, 
    name: "Investment Confirmation", 
    subject: "Your investment has been confirmed", 
    type: "transaction",
    status: "active",
    lastModified: "2024-11-10"
  },
  { 
    id: 3, 
    name: "KYC Approval", 
    subject: "Your KYC has been approved", 
    type: "compliance",
    status: "active",
    lastModified: "2024-11-08"
  },
  { 
    id: 4, 
    name: "Monthly Statement", 
    subject: "Your monthly investment statement", 
    type: "reporting",
    status: "draft",
    lastModified: "2024-11-05"
  },
];

export default function EmailTemplatePage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email Template</h1>
          <p className="text-muted-foreground">Manage email templates for automated communications</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Template
        </Button>
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
                  <Input placeholder="Search templates..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Template Name</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emailTemplates.map((template, index) => (
                  <motion.tr
                    key={template.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{template.name}</TableCell>
                    <TableCell className="text-muted-foreground">{template.subject}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {template.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={template.status === 'active' ? 'default' : 'secondary'}
                        className={template.status === 'active' ? 'bg-success text-success-foreground' : ''}
                      >
                        {template.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(template.lastModified).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}