<template lang="pug">
  <ComponentExample title="Multiple dates" id="date-picker-multiple-dates" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the attribute <code>multiple</code> to allow the user to select multiple dates.
    div(style="max-width: 14rem;" slot="example")
      chi-label(for='example__datepicker_date_multiple') Date
      chi-date-picker(id='example__datepicker_date_multiple' multiple)
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="example__datepicker_multiple_dates">Date</chi-label>
<chi-date-picker id="example__datepicker_multiple_dates" multiple></chi-date-picker>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DatePickerMultipleDates extends Vue {}
</script>
