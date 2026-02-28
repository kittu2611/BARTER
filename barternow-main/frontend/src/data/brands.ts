import type { Brand } from '../types';

export const BRANDS: Brand[] = [
  // Tech & Gadgets
  { id: 'apple', name: 'Apple', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128', sponsorshipType: 'both', minBudget: 50000, maxBudget: 500000 },
  { id: 'samsung', name: 'Samsung', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=samsung.com&sz=128', sponsorshipType: 'both', minBudget: 30000, maxBudget: 300000 },
  { id: 'sony', name: 'Sony', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=sony.com&sz=128', sponsorshipType: 'both', minBudget: 25000, maxBudget: 250000 },
  { id: 'dell', name: 'Dell', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=dell.com&sz=128', sponsorshipType: 'cash', minBudget: 15000, maxBudget: 150000 },
  { id: 'hp', name: 'HP', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=hp.com&sz=128', sponsorshipType: 'cash', minBudget: 10000, maxBudget: 100000 },
  { id: 'lenovo', name: 'Lenovo', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=lenovo.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },
  { id: 'asus', name: 'Asus', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=asus.com&sz=128', sponsorshipType: 'barter', minBudget: 5000, maxBudget: 50000 },
  { id: 'intel', name: 'Intel', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=intel.com&sz=128', sponsorshipType: 'cash', minBudget: 40000, maxBudget: 400000 },
  { id: 'nvidia', name: 'NVIDIA', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128', sponsorshipType: 'cash', minBudget: 50000, maxBudget: 500000 },
  { id: 'boat', name: 'Boat', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=boat-lifestyle.com&sz=128', sponsorshipType: 'barter', minBudget: 2000, maxBudget: 20000 },
  { id: 'jbl', name: 'JBL', category: 'Tech & Gadgets', logo: 'https://www.google.com/s2/favicons?domain=jbl.com&sz=128', sponsorshipType: 'barter', minBudget: 3000, maxBudget: 30000 },

  // Instruments
  { id: 'yamaha', name: 'Yamaha', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=yamaha.com&sz=128', sponsorshipType: 'both', minBudget: 10000, maxBudget: 100000 },
  { id: 'fender', name: 'Fender', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=fender.com&sz=128', sponsorshipType: 'barter', minBudget: 5000, maxBudget: 50000 },
  { id: 'gibson', name: 'Gibson', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=gibson.com&sz=128', sponsorshipType: 'barter', minBudget: 8000, maxBudget: 80000 },
  { id: 'roland', name: 'Roland', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=roland.com&sz=128', sponsorshipType: 'both', minBudget: 7000, maxBudget: 70000 },
  { id: 'casio', name: 'Casio', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=casio.com&sz=128', sponsorshipType: 'barter', minBudget: 2000, maxBudget: 20000 },
  { id: 'shure', name: 'Shure', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=shure.com&sz=128', sponsorshipType: 'barter', minBudget: 3000, maxBudget: 30000 },
  { id: 'sennheiser', name: 'Sennheiser', category: 'Instruments', logo: 'https://www.google.com/s2/favicons?domain=sennheiser.com&sz=128', sponsorshipType: 'barter', minBudget: 4000, maxBudget: 40000 },

  // Sports Gear
  { id: 'nike', name: 'Nike', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=nike.com&sz=128', sponsorshipType: 'both', minBudget: 20000, maxBudget: 200000 },
  { id: 'adidas', name: 'Adidas', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=adidas.com&sz=128', sponsorshipType: 'both', minBudget: 18000, maxBudget: 180000 },
  { id: 'puma', name: 'Puma', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=puma.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },
  { id: 'reebok', name: 'Reebok', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=reebok.com&sz=128', sponsorshipType: 'barter', minBudget: 5000, maxBudget: 50000 },
  { id: 'under-armour', name: 'Under Armour', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=underarmour.com&sz=128', sponsorshipType: 'both', minBudget: 12000, maxBudget: 120000 },
  { id: 'decathlon', name: 'Decathlon', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=decathlon.com&sz=128', sponsorshipType: 'barter', minBudget: 2000, maxBudget: 20000 },
  { id: 'asics', name: 'ASICS', category: 'Sports Gear', logo: 'https://www.google.com/s2/favicons?domain=asics.com&sz=128', sponsorshipType: 'barter', minBudget: 4000, maxBudget: 40000 },

  // Philanthropy
  { id: 'tata', name: 'Tata', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=tata.com&sz=128', sponsorshipType: 'cash', minBudget: 50000, maxBudget: 500000 },
  { id: 'reliance', name: 'Reliance', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=reliance-industries.com&sz=128', sponsorshipType: 'cash', minBudget: 100000, maxBudget: 1000000 },
  { id: 'infosys', name: 'Infosys', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=infosys.com&sz=128', sponsorshipType: 'cash', minBudget: 40000, maxBudget: 400000 },
  { id: 'wipro', name: 'Wipro', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=wipro.com&sz=128', sponsorshipType: 'cash', minBudget: 35000, maxBudget: 350000 },
  { id: 'hdfc', name: 'HDFC', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=hdfcbank.com&sz=128', sponsorshipType: 'cash', minBudget: 60000, maxBudget: 600000 },
  { id: 'icici', name: 'ICICI', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=icicibank.com&sz=128', sponsorshipType: 'cash', minBudget: 55000, maxBudget: 550000 },
  { id: 'unilever', name: 'Unilever', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=unilever.com&sz=128', sponsorshipType: 'both', minBudget: 30000, maxBudget: 300000 },
  { id: 'pg', name: 'Procter & Gamble', category: 'Philanthropy', logo: 'https://www.google.com/s2/favicons?domain=pg.com&sz=128', sponsorshipType: 'both', minBudget: 30000, maxBudget: 300000 },

  // Fashion
  { id: 'zara', name: 'Zara', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=zara.com&sz=128', sponsorshipType: 'barter', minBudget: 10000, maxBudget: 100000 },
  { id: 'hm', name: 'H&M', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=hm.com&sz=128', sponsorshipType: 'barter', minBudget: 8000, maxBudget: 80000 },
  { id: 'lv', name: 'Louis Vuitton', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=louisvuitton.com&sz=128', sponsorshipType: 'barter', minBudget: 50000, maxBudget: 500000 },
  { id: 'gucci', name: 'Gucci', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=gucci.com&sz=128', sponsorshipType: 'barter', minBudget: 40000, maxBudget: 400000 },
  { id: 'levis', name: 'Levi\'s', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=levi.com&sz=128', sponsorshipType: 'both', minBudget: 5000, maxBudget: 50000 },
  { id: 'tommy', name: 'Tommy Hilfiger', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=tommy.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },
  { id: 'raymond', name: 'Raymond', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=raymond.in&sz=128', sponsorshipType: 'both', minBudget: 10000, maxBudget: 100000 },
  { id: 'titan', name: 'Titan', category: 'Fashion', logo: 'https://www.google.com/s2/favicons?domain=titan.co.in&sz=128', sponsorshipType: 'both', minBudget: 12000, maxBudget: 120000 },

  // Home & Living
  { id: 'ikea', name: 'IKEA', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=ikea.com&sz=128', sponsorshipType: 'both', minBudget: 20000, maxBudget: 200000 },
  { id: 'godrej', name: 'Godrej', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=godrej.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },
  { id: 'urban-ladder', name: 'Urban Ladder', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=urbanladder.com&sz=128', sponsorshipType: 'barter', minBudget: 5000, maxBudget: 50000 },
  { id: 'pepperfry', name: 'Pepperfry', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=pepperfry.com&sz=128', sponsorshipType: 'barter', minBudget: 4000, maxBudget: 40000 },
  { id: 'whirlpool', name: 'Whirlpool', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=whirlpool.com&sz=128', sponsorshipType: 'both', minBudget: 10000, maxBudget: 100000 },
  { id: 'philips', name: 'Philips', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=philips.com&sz=128', sponsorshipType: 'both', minBudget: 12000, maxBudget: 120000 },
  { id: 'panasonic', name: 'Panasonic', category: 'Home & Living', logo: 'https://www.google.com/s2/favicons?domain=panasonic.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },

  // Gaming
  { id: 'playstation', name: 'Sony PlayStation', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=playstation.com&sz=128', sponsorshipType: 'both', minBudget: 30000, maxBudget: 300000 },
  { id: 'xbox', name: 'Microsoft Xbox', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=xbox.com&sz=128', sponsorshipType: 'both', minBudget: 25000, maxBudget: 250000 },
  { id: 'nintendo', name: 'Nintendo', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=nintendo.com&sz=128', sponsorshipType: 'both', minBudget: 20000, maxBudget: 200000 },
  { id: 'riot', name: 'Riot Games', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=riotgames.com&sz=128', sponsorshipType: 'cash', minBudget: 50000, maxBudget: 500000 },
  { id: 'valve', name: 'Valve', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=valvesoftware.com&sz=128', sponsorshipType: 'cash', minBudget: 40000, maxBudget: 400000 },
  { id: 'logitech', name: 'Logitech', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=logitech.com&sz=128', sponsorshipType: 'barter', minBudget: 5000, maxBudget: 50000 },
  { id: 'razer', name: 'Razer', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=razer.com&sz=128', sponsorshipType: 'barter', minBudget: 8000, maxBudget: 80000 },
  { id: 'msi', name: 'MSI', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=msi.com&sz=128', sponsorshipType: 'barter', minBudget: 7000, maxBudget: 70000 },
  { id: 'corsair', name: 'Corsair', category: 'Gaming', logo: 'https://www.google.com/s2/favicons?domain=corsair.com&sz=128', sponsorshipType: 'barter', minBudget: 6000, maxBudget: 60000 },

  // Vehicles
  { id: 'tesla', name: 'Tesla', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=tesla.com&sz=128', sponsorshipType: 'cash', minBudget: 100000, maxBudget: 1000000 },
  { id: 'bmw', name: 'BMW', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=bmw.com&sz=128', sponsorshipType: 'cash', minBudget: 80000, maxBudget: 800000 },
  { id: 'mercedes', name: 'Mercedes-Benz', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=mercedes-benz.com&sz=128', sponsorshipType: 'cash', minBudget: 90000, maxBudget: 900000 },
  { id: 'audi', name: 'Audi', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=audi.com&sz=128', sponsorshipType: 'cash', minBudget: 75000, maxBudget: 750000 },
  { id: 'tata-motors', name: 'Tata Motors', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=tatamotors.com&sz=128', sponsorshipType: 'both', minBudget: 40000, maxBudget: 400000 },
  { id: 'mahindra', name: 'Mahindra', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=mahindra.com&sz=128', sponsorshipType: 'both', minBudget: 35000, maxBudget: 350000 },
  { id: 'hyundai', name: 'Hyundai', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=hyundai.com&sz=128', sponsorshipType: 'both', minBudget: 30000, maxBudget: 300000 },
  { id: 'kia', name: 'Kia', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=kia.com&sz=128', sponsorshipType: 'both', minBudget: 25000, maxBudget: 250000 },
  { id: 'royal-enfield', name: 'Royal Enfield', category: 'Vehicles', logo: 'https://www.google.com/s2/favicons?domain=royalenfield.com&sz=128', sponsorshipType: 'both', minBudget: 15000, maxBudget: 150000 },
];
