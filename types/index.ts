export interface Car {
  id: string;
  name: string;
  image: string;
  type: "MPV" | "SUV" | "HATCHBACK" | "SEDAN" | "COMMERCIAL";
  specifications?: string;
}

export interface PricingPackage {
  carModel: string;
  engine: string;
  lowDp: {
    dp: number;
    installment: number;
  };
  normal: {
    dp: number;
    installment: number;
  };
  approval: {
    dp: number;
    installment: number;
  };
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  facebook?: string;
  instagram?: string;
  address?: string;
}
