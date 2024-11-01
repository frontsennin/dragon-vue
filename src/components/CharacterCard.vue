<template>
    <div class="character-card" v-if="character" @click="goToCharacterPage">
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
                <CharacterBasicInfo :character="character"/>
            </div>
        </div>
    </div>
</template>

<script>
import CharacterBasicInfo from '@/components/CharacterBasicInfo'

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
        },
        goToCharacterPage() {
            this.$router.push({ name: 'character', params: { id: this.character.id } })
        }
    },
    components: {
        CharacterBasicInfo
    }
};
</script>
