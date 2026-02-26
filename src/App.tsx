import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const SeoServices = lazy(() => import("./pages/SeoServices"));
const SeoPackages = lazy(() => import("./pages/SeoPackages"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Contact = lazy(() => import("./pages/Contact"));
const LocalSeoKarachi = lazy(() => import("./pages/LocalSeoKarachi"));
const EcommerceSeoKarachi = lazy(() => import("./pages/EcommerceSeoKarachi"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogHireSeoAgency = lazy(() => import("./pages/BlogHireSeoAgency"));
const BlogAIOverviewIgnores = lazy(() => import("./pages/BlogAIOverviewIgnores"));
const BlogOptimizeYouTubeAI = lazy(() => import("./pages/BlogOptimizeYouTubeAI"));
const BlogLocalSeoAI = lazy(() => import("./pages/BlogLocalSeoAI"));
const BlogRankingGuide = lazy(() => import("./pages/BlogRankingGuide"));
const BlogAICitationTraffic = lazy(() => import("./pages/BlogAICitationTraffic"));
const BlogEntitySeo = lazy(() => import("./pages/BlogEntitySeo"));
const TechnicalSeo = lazy(() => import("./pages/TechnicalSeo"));
const OnPageSeo = lazy(() => import("./pages/OnPageSeo"));
const OffPageSeo = lazy(() => import("./pages/OffPageSeo"));
const SeoAudit = lazy(() => import("./pages/SeoAudit"));
const ContentStrategySeo = lazy(() => import("./pages/ContentStrategySeo"));
const KeywordResearch = lazy(() => import("./pages/KeywordResearch"));
const WebsiteMigrationSeo = lazy(() => import("./pages/WebsiteMigrationSeo"));
const InternationalSeo = lazy(() => import("./pages/InternationalSeo"));
const YouTubeSeo = lazy(() => import("./pages/YouTubeSeo"));
const AiSearchOptimization = lazy(() => import("./pages/AiSearchOptimization"));
const SeoForStartups = lazy(() => import("./pages/SeoForStartups"));
const SaasSeo = lazy(() => import("./pages/SaasSeo"));
const RealEstateSeo = lazy(() => import("./pages/RealEstateSeo"));
const SeoConsulting = lazy(() => import("./pages/SeoConsulting"));
const WhiteLabelSeo = lazy(() => import("./pages/WhiteLabelSeo"));
const WordPressSeo = lazy(() => import("./pages/WordPressSeo"));
const ShopifySeo = lazy(() => import("./pages/ShopifySeo"));
const WixSeo = lazy(() => import("./pages/WixSeo"));
const WebflowSeo = lazy(() => import("./pages/WebflowSeo"));
const SquarespaceSeo = lazy(() => import("./pages/SquarespaceSeo"));
const DrupalSeo = lazy(() => import("./pages/DrupalSeo"));
const JoomlaSeo = lazy(() => import("./pages/JoomlaSeo"));
const MagentoSeo = lazy(() => import("./pages/MagentoSeo"));
const ShopifyEcommerceSeo = lazy(() => import("./pages/ShopifyEcommerceSeo"));
const WooCommerceSeo = lazy(() => import("./pages/WooCommerceSeo"));
const BigCommerceSeo = lazy(() => import("./pages/BigCommerceSeo"));
const OpenCartSeo = lazy(() => import("./pages/OpenCartSeo"));
const LawFirmSeo = lazy(() => import("./pages/LawFirmSeo"));
const DentalSeo = lazy(() => import("./pages/DentalSeo"));
const PlumberSeo = lazy(() => import("./pages/PlumberSeo"));
const HvacSeo = lazy(() => import("./pages/HvacSeo"));
const EcommerceSeo = lazy(() => import("./pages/EcommerceSeo"));
const ManufacturingSeo = lazy(() => import("./pages/ManufacturingSeo"));
const RestaurantSeo = lazy(() => import("./pages/RestaurantSeo"));
const AccountingFirmSeo = lazy(() => import("./pages/AccountingFirmSeo"));
const SeoAgencyKarachi = lazy(() => import("./pages/SeoAgencyKarachi"));
const SeoAgencyLahore = lazy(() => import("./pages/SeoAgencyLahore"));
const SeoAgencyIslamabad = lazy(() => import("./pages/SeoAgencyIslamabad"));
const SeoAgencyRawalpindi = lazy(() => import("./pages/SeoAgencyRawalpindi"));
const SeoAgencyFaisalabad = lazy(() => import("./pages/SeoAgencyFaisalabad"));
const SeoAgencyMultan = lazy(() => import("./pages/SeoAgencyMultan"));
const SeoAgencyGujranwala = lazy(() => import("./pages/SeoAgencyGujranwala"));
const SeoAgencyHyderabad = lazy(() => import("./pages/SeoAgencyHyderabad"));
const SeoAgencyPeshawar = lazy(() => import("./pages/SeoAgencyPeshawar"));
const SeoAgencyQuetta = lazy(() => import("./pages/SeoAgencyQuetta"));
const SeoDhaDefence = lazy(() => import("./pages/SeoDhaDefence"));
const SeoClifton = lazy(() => import("./pages/SeoClifton"));
const SeoGulshanEIqbal = lazy(() => import("./pages/SeoGulshanEIqbal"));
const SeoPechs = lazy(() => import("./pages/SeoPechs"));
const SeoNorthNazimabad = lazy(() => import("./pages/SeoNorthNazimabad"));
const SeoGulistanEJohar = lazy(() => import("./pages/SeoGulistanEJohar"));
const SeoSaddar = lazy(() => import("./pages/SeoSaddar"));
const SeoKorangi = lazy(() => import("./pages/SeoKorangi"));
const SeoMalir = lazy(() => import("./pages/SeoMalir"));
const SeoNazimabad = lazy(() => import("./pages/SeoNazimabad"));
const SeoFBArea = lazy(() => import("./pages/SeoFBArea"));
const SeoTariqRoad = lazy(() => import("./pages/SeoTariqRoad"));
const SeoBahadurabad = lazy(() => import("./pages/SeoBahadurabad"));
const SeoShahrahEFaisal = lazy(() => import("./pages/SeoShahrahEFaisal"));
const SeoScheme33 = lazy(() => import("./pages/SeoScheme33"));
const ConstructionSeo = lazy(() => import("./pages/ConstructionSeo"));
const ArchitectureFirmSeo = lazy(() => import("./pages/ArchitectureFirmSeo"));
const EngineeringConsultantSeo = lazy(() => import("./pages/EngineeringConsultantSeo"));
const LogisticsCompanySeo = lazy(() => import("./pages/LogisticsCompanySeo"));
const FreightForwardingSeo = lazy(() => import("./pages/FreightForwardingSeo"));
const ExportCompanySeo = lazy(() => import("./pages/ExportCompanySeo"));
const TextileCompanySeo = lazy(() => import("./pages/TextileCompanySeo"));
const GarmentManufacturerSeo = lazy(() => import("./pages/GarmentManufacturerSeo"));
const OilGasServicesSeo = lazy(() => import("./pages/OilGasServicesSeo"));
const IndustrialEquipmentSeo = lazy(() => import("./pages/IndustrialEquipmentSeo"));
const CybersecurityCompanySeo = lazy(() => import("./pages/CybersecurityCompanySeo"));
const FintechCompanySeo = lazy(() => import("./pages/FintechCompanySeo"));
const AiCompanySeo = lazy(() => import("./pages/AiCompanySeo"));
const BlockchainCompanySeo = lazy(() => import("./pages/BlockchainCompanySeo"));
const EnterpriseItCompanySeo = lazy(() => import("./pages/EnterpriseItCompanySeo"));
const ErpSolutionProviderSeo = lazy(() => import("./pages/ErpSolutionProviderSeo"));
const CloudServicesCompanySeo = lazy(() => import("./pages/CloudServicesCompanySeo"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><p className="text-muted-foreground">Loading...</p></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/seo-services" element={<SeoServices />} />
            <Route path="/seo-packages" element={<SeoPackages />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/local-seo-karachi" element={<LocalSeoKarachi />} />
            <Route path="/ecommerce-seo-karachi" element={<EcommerceSeoKarachi />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-to-hire-best-seo-agency-karachi" element={<BlogHireSeoAgency />} />
            <Route path="/blog/websites-ai-overview-ignores" element={<BlogAIOverviewIgnores />} />
            <Route path="/blog/optimize-youtube-videos-ai-search" element={<BlogOptimizeYouTubeAI />} />
            <Route path="/blog/local-seo-changed-ai-search" element={<BlogLocalSeoAI />} />
            <Route path="/blog/blog-ranking-guide-2026" element={<BlogRankingGuide />} />
            <Route path="/blog/ai-citation-traffic-source" element={<BlogAICitationTraffic />} />
            <Route path="/blog/entity-seo-explained" element={<BlogEntitySeo />} />
            <Route path="/technical-seo" element={<TechnicalSeo />} />
            <Route path="/on-page-seo" element={<OnPageSeo />} />
            <Route path="/off-page-seo" element={<OffPageSeo />} />
            <Route path="/seo-audit" element={<SeoAudit />} />
            <Route path="/content-strategy-seo" element={<ContentStrategySeo />} />
            <Route path="/keyword-research" element={<KeywordResearch />} />
            <Route path="/website-migration-seo" element={<WebsiteMigrationSeo />} />
            <Route path="/international-seo" element={<InternationalSeo />} />
            <Route path="/youtube-seo" element={<YouTubeSeo />} />
            <Route path="/ai-search-optimization" element={<AiSearchOptimization />} />
            <Route path="/seo-for-startups" element={<SeoForStartups />} />
            <Route path="/saas-seo" element={<SaasSeo />} />
            <Route path="/real-estate-seo" element={<RealEstateSeo />} />
            <Route path="/seo-consulting" element={<SeoConsulting />} />
            <Route path="/white-label-seo" element={<WhiteLabelSeo />} />
            <Route path="/wordpress-seo" element={<WordPressSeo />} />
            <Route path="/shopify-seo" element={<ShopifySeo />} />
            <Route path="/wix-seo" element={<WixSeo />} />
            <Route path="/webflow-seo" element={<WebflowSeo />} />
            <Route path="/squarespace-seo" element={<SquarespaceSeo />} />
            <Route path="/drupal-seo" element={<DrupalSeo />} />
            <Route path="/joomla-seo" element={<JoomlaSeo />} />
            <Route path="/magento-seo" element={<MagentoSeo />} />
            <Route path="/shopify-ecommerce-seo" element={<ShopifyEcommerceSeo />} />
            <Route path="/woocommerce-seo" element={<WooCommerceSeo />} />
            <Route path="/bigcommerce-seo" element={<BigCommerceSeo />} />
            <Route path="/opencart-seo" element={<OpenCartSeo />} />
            <Route path="/law-firm-seo" element={<LawFirmSeo />} />
            <Route path="/dental-seo" element={<DentalSeo />} />
            <Route path="/plumber-seo" element={<PlumberSeo />} />
            <Route path="/hvac-seo" element={<HvacSeo />} />
            <Route path="/ecommerce-seo" element={<EcommerceSeo />} />
            <Route path="/manufacturing-seo" element={<ManufacturingSeo />} />
            <Route path="/restaurant-seo" element={<RestaurantSeo />} />
            <Route path="/accounting-firm-seo" element={<AccountingFirmSeo />} />
            <Route path="/seo-agency-karachi" element={<SeoAgencyKarachi />} />
            <Route path="/seo-agency-lahore" element={<SeoAgencyLahore />} />
            <Route path="/seo-agency-islamabad" element={<SeoAgencyIslamabad />} />
            <Route path="/seo-agency-rawalpindi" element={<SeoAgencyRawalpindi />} />
            <Route path="/seo-agency-faisalabad" element={<SeoAgencyFaisalabad />} />
            <Route path="/seo-agency-multan" element={<SeoAgencyMultan />} />
            <Route path="/seo-agency-gujranwala" element={<SeoAgencyGujranwala />} />
            <Route path="/seo-agency-hyderabad" element={<SeoAgencyHyderabad />} />
            <Route path="/seo-agency-peshawar" element={<SeoAgencyPeshawar />} />
            <Route path="/seo-agency-quetta" element={<SeoAgencyQuetta />} />
            <Route path="/dha-defence" element={<SeoDhaDefence />} />
            <Route path="/clifton" element={<SeoClifton />} />
            <Route path="/gulshan-e-iqbal" element={<SeoGulshanEIqbal />} />
            <Route path="/pechs" element={<SeoPechs />} />
            <Route path="/north-nazimabad" element={<SeoNorthNazimabad />} />
            <Route path="/gulistan-e-johar" element={<SeoGulistanEJohar />} />
            <Route path="/saddar" element={<SeoSaddar />} />
            <Route path="/korangi" element={<SeoKorangi />} />
            <Route path="/malir" element={<SeoMalir />} />
            <Route path="/nazimabad" element={<SeoNazimabad />} />
            <Route path="/fb-area" element={<SeoFBArea />} />
            <Route path="/tariq-road" element={<SeoTariqRoad />} />
            <Route path="/bahadurabad" element={<SeoBahadurabad />} />
            <Route path="/shahrah-e-faisal" element={<SeoShahrahEFaisal />} />
            <Route path="/scheme-33" element={<SeoScheme33 />} />
            <Route path="/construction-company-seo" element={<ConstructionSeo />} />
            <Route path="/architecture-firm-seo" element={<ArchitectureFirmSeo />} />
            <Route path="/engineering-consultant-seo" element={<EngineeringConsultantSeo />} />
            <Route path="/logistics-company-seo" element={<LogisticsCompanySeo />} />
            <Route path="/freight-forwarding-seo" element={<FreightForwardingSeo />} />
            <Route path="/export-company-seo" element={<ExportCompanySeo />} />
            <Route path="/textile-company-seo" element={<TextileCompanySeo />} />
            <Route path="/garment-manufacturer-seo" element={<GarmentManufacturerSeo />} />
            <Route path="/oil-gas-services-seo" element={<OilGasServicesSeo />} />
            <Route path="/industrial-equipment-supplier-seo" element={<IndustrialEquipmentSeo />} />
            <Route path="/cybersecurity-company-seo" element={<CybersecurityCompanySeo />} />
            <Route path="/fintech-company-seo" element={<FintechCompanySeo />} />
            <Route path="/ai-company-seo" element={<AiCompanySeo />} />
            <Route path="/blockchain-company-seo" element={<BlockchainCompanySeo />} />
            <Route path="/enterprise-it-company-seo" element={<EnterpriseItCompanySeo />} />
            <Route path="/erp-solution-provider-seo" element={<ErpSolutionProviderSeo />} />
            <Route path="/cloud-services-company-seo" element={<CloudServicesCompanySeo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
