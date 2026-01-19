import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Trash2, Edit, ArrowLeft } from "lucide-react";

interface Lead {
  id: string;
  company_name: string;
  name: string;
  email: string;
  phone: string | null;
  created_at: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editFormData, setEditFormData] = useState({
    company_name: "",
    name: "",
    email: "",
    phone: "",
  });

  const ADMIN_PASSWORD = "golfpod2026";

  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      setPasswordError("");
      fetchLeads();
    } else {
      setPasswordError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setPassword("");
    setLeads([]);
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("golfpod_leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching leads:", error);
        throw error;
      }

      setLeads(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) {
      return;
    }

    try {
      const { error } = await supabase.from("golfpod_leads").delete().eq("id", id);

      if (error) {
        console.error("Error deleting lead:", error);
        throw error;
      }

      fetchLeads();
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting lead. Please try again.");
    }
  };

  const handleEdit = (lead: Lead) => {
    setEditingLead(lead);
    setEditFormData({
      company_name: lead.company_name,
      name: lead.name,
      email: lead.email,
      phone: lead.phone || "",
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLead) return;

    try {
      const { error } = await supabase
        .from("golfpod_leads")
        .update({
          company_name: editFormData.company_name,
          name: editFormData.name,
          email: editFormData.email,
          phone: editFormData.phone || null,
        })
        .eq("id", editingLead.id);

      if (error) {
        console.error("Error updating lead:", error);
        throw error;
      }

      setEditingLead(null);
      fetchLeads();
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating lead. Please try again.");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#faf2dc] flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white border border-[#3F6B4F] rounded-lg p-6">
            <h1 className="text-2xl font-medium text-[#070707] mb-1">Admin Panel</h1>
            <p className="text-sm font-light text-[#070707]/80 mb-6">Enter password</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-sm font-light text-[#070707] mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className="bg-white border-gray-300 text-[#070707] h-12 text-base"
                  placeholder="Enter password"
                  required
                />
                {passwordError && <p className="text-sm text-red-600 mt-2">{passwordError}</p>}
              </div>
              <Button
                type="submit"
                className="w-full bg-[#3F6B4F] text-white hover:bg-[#2d4f3a] h-12 text-base font-light"
              >
                Login
              </Button>
            </form>
            <a href="/" className="text-sm font-light text-[#070707] hover:text-black flex items-center gap-2 mt-6">
              <ArrowLeft className="w-4 h-4" />
              Back to website
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf2dc] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h1 className="text-xl font-medium text-[#070707]">Admin Panel</h1>
              <p className="text-xs font-light text-[#070707]/80">{leads.length} submissions</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={fetchLeads}
                className="px-3 py-2 text-xs border border-[#3F6B4F] bg-[#faf2dc] text-[#070707] rounded-lg hover:bg-[#faf2dc] hover:border-[#2d4f3a] transition-colors"
              >
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-xs bg-[#3F6B4F] text-white rounded-lg hover:bg-[#2d4f3a] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-sm font-light text-[#070707]/80">Loading...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12 bg-white border border-gray-300 rounded-lg">
            <p className="text-sm font-light text-[#070707]/80">No submissions yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#070707]/60 mb-1">{formatDate(lead.created_at)}</p>
                    <h3 className="text-base font-medium text-[#070707] mb-1 break-words">{lead.company_name}</h3>
                    <p className="text-sm font-light text-[#070707] mb-2 break-words">{lead.name}</p>
                    <a href={`mailto:${lead.email}`} className="text-sm text-[#070707] hover:text-[#3F6B4F] break-all block mb-1">
                      {lead.email}
                    </a>
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="text-sm text-[#070707] hover:text-[#3F6B4F] block">
                        {lead.phone}
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(lead)}
                      className="p-2 border border-gray-300 rounded-lg hover:border-[#3F6B4F] transition-colors"
                      aria-label="Edit"
                    >
                      <Edit className="w-4 h-4 text-[#070707]" />
                    </button>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-2 border border-gray-300 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-[#070707]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop Table View */}
        <div className="hidden md:block mt-6">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#3F6B4F] text-white">
                  <tr>
                    <th className="text-left p-4 text-sm font-light">Date</th>
                    <th className="text-left p-4 text-sm font-light">Company</th>
                    <th className="text-left p-4 text-sm font-light">Name</th>
                    <th className="text-left p-4 text-sm font-light">Email</th>
                    <th className="text-left p-4 text-sm font-light">Phone</th>
                    <th className="text-right p-4 text-sm font-light">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-gray-300 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-light text-[#070707]">{formatDate(lead.created_at)}</td>
                      <td className="p-4 text-sm font-light text-[#070707]">{lead.company_name}</td>
                      <td className="p-4 text-sm font-light text-[#070707]">{lead.name}</td>
                      <td className="p-4 text-sm font-light text-[#070707]">
                        <a href={`mailto:${lead.email}`} className="hover:text-[#3F6B4F] transition-colors">
                          {lead.email}
                        </a>
                      </td>
                      <td className="p-4 text-sm font-light text-[#070707]">{lead.phone || "-"}</td>
                      <td className="p-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(lead)}
                            className="p-2 border border-gray-300 rounded-lg hover:border-[#3F6B4F] transition-colors"
                            aria-label="Edit"
                          >
                            <Edit className="w-4 h-4 text-[#070707]" />
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 border border-gray-300 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors"
                            aria-label="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-[#070707]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editingLead} onOpenChange={() => setEditingLead(null)}>
          <DialogContent className="bg-white border-[#3F6B4F] border max-w-md mx-4 p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium text-[#070707] mb-1">Edit Lead</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpdate} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="edit-company" className="text-sm font-light text-[#070707] mb-2 block">
                  Company Name *
                </Label>
                <Input
                  id="edit-company"
                  required
                  value={editFormData.company_name}
                  onChange={(e) => setEditFormData({ ...editFormData, company_name: e.target.value })}
                  className="bg-white border-gray-300 text-[#070707] h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="edit-name" className="text-sm font-light text-[#070707] mb-2 block">
                  Name *
                </Label>
                <Input
                  id="edit-name"
                  required
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="bg-white border-gray-300 text-[#070707] h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="edit-email" className="text-sm font-light text-[#070707] mb-2 block">
                  Email *
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  required
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  className="bg-white border-gray-300 text-[#070707] h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="edit-phone" className="text-sm font-light text-[#070707] mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="edit-phone"
                  type="tel"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  className="bg-white border-gray-300 text-[#070707] h-12 text-base"
                />
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#3F6B4F] text-white hover:bg-[#2d4f3a] h-12 text-base font-light"
                >
                  Update
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditingLead(null)}
                  className="w-full border-gray-300 bg-white text-[#070707] hover:bg-gray-50 h-12 text-base font-light"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
