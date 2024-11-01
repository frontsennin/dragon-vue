<template>
  <div class="container" v-if="charactersList.length > 0">
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-12 col-md-3 col-xl-3" v-for="(character, index) in charactersList" :key="index">
        <CharacterCard :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard';
import dragonballService from '@/services/dragonballService';
import { saveData, getData } from '@/services/indexedDBService';
import { errorToastr } from '@/services/helperService';

export default {
  name: 'HomeView',
  data() {
    return {
      charactersList: [],
    };
  },
  async mounted() {
    this.mountByDb()
  },
  methods: {
    async mountByDb() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      this.charactersList = await getData('charactersList');
      if (this.charactersList.length === 0) {
        try {
          const { data } = await dragonballService.getAllCharacters();
          this.charactersList = data.items;
          await saveData('charactersList', data.items);
        } catch (error) {
          errorToastr(error.message);
        }
      }
      loader.hide();
    }
  },
  components: {
    CharacterCard,
  },
};
</script>