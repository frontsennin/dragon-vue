<template>
    <div class="mb-4">
        <InfoText :value="`${character.race} - ${character.gender}`" />
    </div>
    <InfoText :title="'Ki Inicial:'" :value="character.ki" />
    <InfoText :title="'Ki Máximo:'" :value="character.maxKi" />
    <InfoText :title="'Afiliação:'" :value="character.affiliation" />
</template>

<script>
import InfoText from '@/components/InfoText'

export default {
    name: 'CharacterBasicInfo',
    components: {
        InfoText
    },
    props: {
        character: {
            type: Object,
            required: true
        }
    }
}
</script>