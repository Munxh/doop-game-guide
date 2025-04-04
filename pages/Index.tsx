
import { Layout } from '@/components/Layout';
import ActionCard from '@/components/ActionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section id="introduction" className="mb-12 scroll-mt-20">
          <h1 className="text-center">doop - Spillregler</h1>
          
          <div className="bg-white rounded-xl p-6 shadow-md mb-8">
            <p className="text-lg mb-4">
              <strong>"doop"</strong> er et rundebasert kortspill der du etter tre runder sitter igjen med en poengsum som avgjør om du mister et liv. Hver gang det er din tur må du gjøre en handling.
            </p>
            <p>
              Det går på rundgang hvem som starter hver spillomgang bestående av tre runder. Spillet pågår fram til en spiller har mistet alle livene sine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-doop-primary border-b pb-2">Oppsett</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold text-doop-primary">Antall spillere:</span> 
                  <span className="ml-2">3-6</span>
                </li>
                <li>
                  <span className="font-bold text-doop-primary">Antall liv per spiller:</span> 
                  <span className="ml-2">3</span>
                </li>
                <li>
                  <span className="font-bold text-doop-primary">Antall kort per spiller:</span> 
                  <span className="ml-2">3</span>
                </li>
                <li>
                  <span className="font-bold text-doop-primary">Antall runder per omgang:</span> 
                  <span className="ml-2">3</span>
                </li>
                <li>
                  <span className="font-bold text-doop-primary">Kortverdier:</span> 
                  <span className="ml-2">1-10 (0-9 i prototypen)</span>
                </li>
                <li>
                  <span className="font-bold text-doop-primary">Tid:</span> 
                  <span className="ml-2">20-40 min</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-doop-primary border-b pb-2">Kortene</h3>
              
              <Tabs defaultValue="poengkort" className="w-full">
                <TabsList className="w-full mb-4 grid grid-cols-2">
                  <TabsTrigger className="font-medium" value="poengkort">Poengkort</TabsTrigger>
                  <TabsTrigger className="font-medium" value="actionkort">Actionkort</TabsTrigger>
                </TabsList>
                <TabsContent value="poengkort" className="p-3 bg-doop-light/30 rounded-md">
                  <p className="font-medium">50 kort med verdier mellom 1 og 10</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <div key={num} className="w-8 h-10 bg-white border-2 border-doop-primary rounded flex items-center justify-center font-bold text-doop-primary">
                        {num}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="actionkort" className="p-3 bg-doop-light/30 rounded-md">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-doop-secondary/20 rounded-full flex items-center justify-center text-doop-secondary mr-2">🔄</span>
                      <span className="font-medium">Swap</span>
                      <span className="ml-2 text-sm text-gray-500">(2 stk)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-doop-accent/20 rounded-full flex items-center justify-center text-doop-accent mr-2">⬆️</span>
                      <span className="font-medium">Highest</span>
                      <span className="ml-1 text-lg">🔒</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-doop-accent/20 rounded-full flex items-center justify-center text-doop-accent mr-2">⬇️</span>
                      <span className="font-medium">Lowest</span>
                      <span className="ml-1 text-lg">🔒</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-doop-primary/20 rounded-full flex items-center justify-center text-doop-primary mr-2">🔀</span>
                      <span className="font-medium">Trade One Card</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-6 h-6 bg-doop-primary/20 rounded-full flex items-center justify-center text-doop-primary mr-2">♻️</span>
                      <span className="font-medium">Exchange All Cards</span>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <h2 id="action-cards" className="scroll-mt-20">Forklaring av actionkort</h2>
        
        <ActionCard
          id="swap-card"
          title="Swap"
          color="doop-secondary"
          icon="🔄"
          isEven={false}
          description={
            <p>Du bytter alle kortene dine med en spiller av ditt valg.</p>
          }
        />
        
        <ActionCard
          id="highest-card"
          title="Highest"
          color="doop-accent"
          icon="⬆️"
          lock={true}
          isEven={true}
          description={
            <p>
              Du låser kortene dine og sier at du har høyeste poengsum. Dersom du ikke har høyest poengsum ved spillomgangens slutt, mister du et liv. 
              Når kortene dine er låst, kan ingen bytte med eller trekke kort av deg. 
              Du kan heller ikke gjøre flere handlinger resten av spillomgangen.
            </p>
          }
        />
        
        <ActionCard
          id="lowest-card"
          title="Lowest"
          color="doop-accent"
          icon="⬇️"
          lock={true}
          isEven={false}
          description={
            <p>
              Du låser kortene og sier du har laveste poengsum. Dersom du ender spillomgangen med det laveste poengsum av alle, vil den med nest laveste sum miste ett liv. 
              Dersom noen andre enn deg har lavere poengsum på slutten av spillomgangen, mister du et liv. 
              Når kortene dine er låst, kan ingen bytte med eller trekke kort av deg. 
              Du kan heller ikke gjøre flere handlinger resten av spillomgangen.
            </p>
          }
        />
        
        <ActionCard
          id="trade-card"
          title="Trade One Card"
          color="doop-primary"
          icon="🔀"
          isEven={true}
          description={
            <p>
              Velg en tilfeldig spiller. Gi spilleren først ett av dine kort, og trekk deretter ett av spillerens andre kort.
            </p>
          }
        />
        
        <ActionCard
          id="exchange-card"
          title="Exchange All Cards"
          color="doop-primary"
          icon="♻️"
          isEven={false}
          description={
            <p>
              Kast alle kortene dine ved siden av discard bunken, uten at tallverdiene vises, og trekk tre kort nye fra kortstokken.
            </p>
          }
        />
        
        <section id="actions" className="mb-12 scroll-mt-20">
          <h2>Hva er en handling</h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="space-y-4">
              <div>
                <p className="font-medium">Alternativ 1:</p>
                <p>Trekk ett nytt kort og legg ett i uttleggsbunken</p>
                <p>Trekk enten fra kortstokken eller toppen av utleggsbunken</p>
              </div>
              
              <div>
                <p className="font-medium">Alternativ 2:</p>
                <p>Bruke ett av actionkortene som ligger åpent mellom spillerne</p>
                <p>Etter at kortet er brukt, legges den foran spilleren som brukte det. Kortet er ute av spill til neste spillomgang, og hvert kort kan dermed kun brukes 1 gang per spillomgang.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="gameplay" className="mb-12 scroll-mt-20">
          <h2>Spillets gang</h2>
          
          <section id="getting-started" className="mb-8 scroll-mt-20">
            <h3>Komme i gang</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p>
                Spilleren som starter, plasserer brikken som indikerer startspilleren foran seg. Actionkortene plasseres åpent midt mellom alle spillerne. Startspilleren deler ut 3 kort med poengverdi skjult til hver spiller. Spillet settes i gang ved at startspilleren utfører en handling. Nå er det neste person med klokken som må utføre en handling. Totalt skal alle spillere utføre 3 hendelser i en spillomgang, dvs 3 runder. Etter 3 runder åpner spillerne kortene sine og finner ut hvem som mister et liv denne spillomgangen.
              </p>
            </div>
          </section>
          
          <section id="losing-lives" className="mb-8 scroll-mt-20">
            <h3>Hvem mister liv</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p>Etter tre runder mister spilleren(e) med lavest poengsum et liv, med mindre noen har brukt et av actionkortene Lowest eller Highest. Følgende regler gjelder:</p>
              
              <div className="mt-4 space-y-4">
                <div className="pl-4 border-l-4 border-doop-primary">
                  <p className="font-medium">Ingen har brukt Lowest eller Highest:</p>
                  <p>Spilleren med lavest poengsum mister ett liv.</p>
                </div>
                
                <div className="pl-4 border-l-4 border-doop-accent">
                  <p className="font-medium">Noen har brukt Lowest:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hvis spilleren som valgte Lowest faktisk har lavest poengsum, mister spilleren med nest lavest poengsum et liv.</li>
                    <li>Hvis spilleren som valgte Lowest ikke har lavest poengsum, mister de selv ett liv.</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-doop-secondary">
                  <p className="font-medium">Noen har brukt Highest:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hvis spilleren som valgte Highest har høyest poengsum, mister spilleren med lavest poengsum ett liv.</li>
                    <li>Hvis spilleren som valgte Highest ikke har høyest poengsum, mister de selv ett liv.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section id="special-cases" className="mb-8 scroll-mt-20">
            <h3>Spesialtilfeller</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc pl-5 space-y-2">
                <li>Dersom både personen med Highest actionkortet og personen med Lowest actionkortet ikke har riktig så mister begge ett liv.</li>
                <li>Dersom to personer har lik poengsum og har lavest poengsum mister begge ett liv.</li>
                <li>Om to spillere har lik lavest sum, og én av dem har trukket et Lowest kort, taper kun spilleren som har trukket Lowest kortet.</li>
              </ul>
            </div>
          </section>
          
          <section id="new-round" className="mb-8 scroll-mt-20">
            <h3>Ny spillomgang</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p>
                Alle actionkort legges tilbake i midten. Kortene med tallverdiene stokkes sammen igjen. Spillerbrikken som indikerer hvilken spiller som starter flyttes nå til neste spiller, med klokken, som nå starter runden. Del ut 3 kort til hver spiller og runden er i gang.
              </p>
            </div>
          </section>
        </section>
        
        <section id="game-end" className="mb-12 scroll-mt-20">
          <h2>Spillets slutt</h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p>
              Spillet avsluttes når én spiller har mistet alle de tre livene sine.
            </p>
          </div>
        </section>
        
        <section id="examples" className="mb-12 scroll-mt-20">
          <h2>Eksempelrunder</h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p>
              Martin, Vilde og Andrea skal spille doop! De går i gang med første spillomgang, det vil si tre runder der alle spillerne må gjøre en handling. Actionkortene ligger åpent mellom dem, og alle har fått delt ut tre kort.
            </p>
            
            <h4 className="text-xl font-medium mt-6 mb-3">Eksempel 1</h4>
            <p>
              Poengsummen på slutten av siste runden når alle viser sine kort på tur er slik:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Martin har 28 (9+10+9) poeng</li>
              <li>Vilde 15 (5+8+2) poeng</li>
              <li>Andrea 9 (7+1+1) poeng</li>
            </ul>
            
            <p className="mb-6">
              Andrea trakk i runde 2 Lowest kortet. Siden hun endte spillet med lavest sum, vil personen med nest lavest sum tape. Som i dette tilfellet er Vilde. Martin har høyest sum, og taper dermed ikke. Vilde som hadde 3 liv før spillomgangens start har nå 2. Andrea og Martin har fremdeles 3 liv.
            </p>
            
            <h4 className="text-xl font-medium mt-6 mb-3">Eksempel 2</h4>
            <p>
              I neste spillomgang legges actionkortene tilbake inn i midten. Poengkortene shuffles tilbake i stokken, og tre nye kort blir delt ut til hver spiller. Startspilleren er spilleren i klokkens gang etter forrige startspiller. De spiller ferdig en spillomgang, og slik ser poengene ut etter tre runder:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Martin har 22 (5+9+8) poeng</li>
              <li>Vilde 23 (7+8+8) poeng</li>
              <li>Andrea 17 (9+4+5) poeng</li>
            </ul>
            
            <p>
              Martin trakk Highest kortet i siste runde. Men siden Vilde endte opp med å ha ett poeng mer enn han, mister Martin et liv. Ingen andre enn Martin mister et liv i denne spillomgangen. Andrea har dermed fortsatt 3 liv, mens Vilde og Martin har begge 2 liv.
            </p>
            
            <p className="mt-4">
              Spillet fortsetter helt til en av spillerne går tom for liv.
            </p>
          </div>
        </section>
        
        <section id="improvements" className="mb-12 scroll-mt-20">
          <h2>Forbedringer</h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-medium mb-3">Mulige endringer</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bedre måte å tape på enn å miste tre liv, eller ihvertfall ha en fysisk indikator</li>
              <li>Kan man vinne liv tilbake?</li>
            </ul>
            
            <h4 className="text-xl font-medium mt-6 mb-3">Forslag til nytt actionkort</h4>
            <div className="pl-4 border-l-4 border-doop-primary py-2">
              <p>Gi en spiller som ikke er deg 4 kort (kan være litt for powerful å gi noen det, om noen har trukket høyest kort kortet)</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
