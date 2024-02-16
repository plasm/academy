<template>
  <ac-pricing data-name="ac-pricing-alta-formazione">
    <template #cards>
      <ac-pricing-card
        title="ISCRIZIONE RIDOTTA"
        subtitle="Pagamento in un'unica soluzione"
        price="585,00"
        link="https://rebrand.ly/dff6g2m"
        theme="silver"
      >
        <template #description>
          Agevolazione riservata agli ex allievi di AIGES Academy e ai soci di MediaCoor
        </template>
        <template #footer>
          <div>Tre incontri gratuiti di supervisione individuale sul primo caso di coordinazione genitoriale</div>
          <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
        </template>
      </ac-pricing-card>
      <ac-pricing-card
        title="ISCRIZIONE STANDARD"
        subtitle="Pagamento in un'unica soluzione o con dilazione da tre a dieci rate mensili senza interessi"
        price="650,00"
        link="https://rebrand.ly/dff6g2m"
        theme="silver"
        highlight
      >
        <template #description>
          Sconto del 5% per i soci di AIAF Campania<br>
          Sconto del 3% per gli iscritti agli ordini professionali
        </template>
        <template #footer>
          <div>Tre incontri gratuiti di supervisione individuale sul primo caso di coordinazione genitoriale</div>
          <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
        </template>
      </ac-pricing-card>
    </template>
  </ac-pricing>
</template>

<script>
export default {
  name: 'ac-pricing-alta-formazione'
}
</script>

<style lang="scss" scoped>

</style>
