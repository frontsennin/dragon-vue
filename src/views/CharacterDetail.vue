<template>
    <div v-if="character">
        <h1>{{ character.name }}</h1>
    </div>
</template>

<script>
import dragonballService from '@/services/dragonballService';
import { errorToastr } from '@/services/helperService';

export default {
    name: 'CharacterDetail',
    data() {
        return {
            character: null
        }
    },
    async mounted() {
        let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel,
        });
        try {
            const { data } = await dragonballService.getCharacterById(this.$route.params.id);
            this.character = data;
        } catch (error) {
            errorToastr(error.message);
        } finally {
            loader.hide();
        }
    },
}
</script>