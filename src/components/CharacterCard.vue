<template>
    <div class="character-card" v-if="character">
        <div class="row text-center">
            <div class="col">
                <div class="character-image-section">
                    <img :src="character.image" class="character-image" :alt="character.name + '-image'">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <strong class="character-name">{{ capitalizeFirstLetter(character.name) }}</strong>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <InfoText :value="`${character.race} - ${character.gender}`"/>
                <InfoText :title="'Ki Inicial:'" :value="character.ki"/>
                <InfoText :title="'Ki Máximo:'" :value="character.maxKi"/>
                <InfoText :title="'Afiliação:'" :value="character.affiliation"/>
            </div>
        </div>
    </div>
</template>

<script>
import InfoText from '@/components/InfoText'

export default {
    name: 'CharacterCard',
    props: {
        character: {
            type: Object,
            required: true,
        },
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
    components: {
        InfoText
    }
};
</script>
