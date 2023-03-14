export interface ICity {
  id: string
  name: string
}

export interface IScatteringData {
  x: string | number
  y: string | number
}

export interface ITradeList {
  Area: string
  TradePrice: string
  Type: string
  Region: string
  MunicipalityCode: string
  Prefecture: string
  Municipality: string
  DistrictName: string
  PricePerUnit?: string
  FloorPlan: string
  UnitPrice: string
  LandShape: string
  Frontage: string
  TotalFloorArea: string
  BuildingYear: string
  Structure: string
  Use: string
  Purpose: string
  Direction: string
  Classification: string
  Breadth: string
  CityPlanning: string
  CoverageRatio: string
  FloorAreaRatio: string
  Period: string
  Renovation: string
  Remarks: string
}
