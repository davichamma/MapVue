<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model"> </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      model: {
        company: "Carregando...",
        email: "davichamma97@gmail.com",
        username: "davichamma",
        firstName: "Davi",
        lastName: "Maciel",
        address: "3 Abbey Rd., London NW8 9AY, Reino Unido",
        city: "Campo Grande",
        country: "Brasil",
        about:
          `Estagiário de TI
Tribunal Regional Eleitoral de Mato Grosso do Sul
* 2019/2021 * Campo Grande
Estagiário - Web Developer
Centro de Inovação SESI - Sistemas de Gestão em SST
* 2022/2023 * Campo Grande
Estagiário - Equipe de processos
SESI - Gerência Executiva
* 2023/Março 2023 * Campo Grande
Analista de processos - Equipe de processos
SESI - Gerência Executiva
* Março 2023/Cargo atual * Campo Grande
`,
      },
      user: {
        fullName: "Davi Maciel",
        title: "Ceo/Co-Founder",
        description: ``,
      },
    };
  },
};
</script>
<style></style>
