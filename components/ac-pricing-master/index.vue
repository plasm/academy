<template>
  <ac-pricing data-name="ac-pricing-master">
    <div class="flex flex-col p-8 lg:p-0">
      <h1 class="text-4xl text-white">
        Metti un piede
        <span class="lg:block"> dentro al corso</span>
      </h1>
      <div class="mt-8 max-w-lg">
        <div class="flex flex-col gap-4 text-sm text-neutral-400 ">
          <div>
            L’iscrizione può essere opzionata mediante il pagamento di <span class="text-gold">€ 200,00</span>.
          </div>
          <div>
            L’opzione dà all’allievo il diritto di seguire le prime due lezioni del corso, senza alcun obbligo di proseguimento.</div>
          <div>
            Se l’allievo decide di proseguire, l’opzione viene considerata come acconto sull’importo totale e viene richiesto il saldo dell’importo residuo.
          </div>
          <div>Se l’allievo decide di non proseguire, l’opzione non viene rimborsata, salvo in caso di annullamento del corso da parte di AIGES Academy.</div>
        </div>
      </div>
    </div>
    <template #cards>
      <ac-pricing-card
        title="ISCRIZIONE RIDOTTA"
        subtitle="Pagamento in un'unica soluzione"
        price="3.150,00"
        link="https://rebrand.ly/dff6g2m"
        theme="gold"
      >
        <template #description>
          Agevolazione riservata agli ex allievi di AIGES Academy e ai soci di MediaCoor
        </template>
        <template #footer>
          <div>Fino a un massimo di dieci sessioni di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto</div>
          <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
        </template>
      </ac-pricing-card>
      <ac-pricing-card
        title="ISCRIZIONE STANDARD"
        subtitle="Pagamento in un’unica soluzione o con dilazione da tre a dieci rate mensili senza interessi"
        price="3.500,00"
        link="https://rebrand.ly/dff6g2m"
        highlight
      >
        <template #description>
          Sconto del 5% per i soci di AIAF Campania<br>
          Sconto del 3% per gli iscritti agli ordini professionali
        </template>
        <template #footer>
          <div>Fino a un massimo di dieci sessioni di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto</div>
          <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
        </template>
      </ac-pricing-card>
    </template>
  </ac-pricing>
</template>

<script>
export default {
  name: 'ac-pricing-master'
}
</script>

<style lang="scss" scoped>
</style>
