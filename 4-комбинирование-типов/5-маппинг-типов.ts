type PCBrand = {
  name: string;
  country: string;
  createdAt: Date;
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PCBrand
}

const brandRecord: MyPcRecord = {
  apple: {
    country: 'USa',
    createdAt: new Date(),
    name: 'apple'
  }
}

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.dell?.country);
}

type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
};

const p: PartOfWindow = {
  screen: window.screen
}

export {}