
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function JoinForm() {
  
  const [formData, setFormData] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    emailConfirm: "",
    italianOrigin: "",
  });

  const createMembershipMutation = trpc.memberships.create.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      // Réinitialiser le formulaire
      setFormData({
        civility: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        emailConfirm: "",
        italianOrigin: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Une erreur est survenue");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (formData.email !== formData.emailConfirm) {
      toast.error("Les emails ne correspondent pas");
      return;
    }

    if (!formData.civility) {
      toast.error("Veuillez sélectionner une civilité");
      return;
    }

    // Soumettre les données
    createMembershipMutation.mutate({
      civility: formData.civility as "M" | "Mme" | "Mlle",
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      italianOrigin: formData.italianOrigin === "yes",
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          [TEXT]
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          [TEXT]
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Civilité */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser *
            </label>
            <select
              name="civility"
              value={formData.civility}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">-- [TEXT] --</option>
              <option value="M">M.</option>
              <option value="Mme">Mme</option>
              <option value="Mlle">Mlle</option>
            </select>
          </div>

          {/* Prénom */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Nom */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Adresse */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Téléphone */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Réinitialiser *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email Confirmation */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Confirmer l'email *
            </label>
            <input
              type="email"
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Origine italienne */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-4">
              Réinitialiser
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="italianOrigin"
                  value="yes"
                  checked={formData.italianOrigin === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>[TEXT]</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="italianOrigin"
                  value="no"
                  checked={formData.italianOrigin === "no"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>[TEXT]</span>
              </label>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={createMembershipMutation.isPending}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              {createMembershipMutation.isPending ? "Envoi en cours..." : "Soumettre"}
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="flex-1"
              onClick={() =>
                setFormData({
                  civility: "",
                  firstName: "",
                  lastName: "",
                  address: "",
                  phone: "",
                  email: "",
                  emailConfirm: "",
                  italianOrigin: "",
                })
              }
            >
              Réinitialiser
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
