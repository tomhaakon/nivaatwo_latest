<template>
  <v-dialog v-model="loginDialog" width="50vh">
    <v-card class="elevation-12">
      <v-toolbar color="primary" class="elevation-1">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            name="login"
            label="Login"
            type="text"
            class="mt-5"
          ></v-text-field>
          <v-text-field
            id="password"
            name="password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn plain to="/">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    loginDialog: false,
    loginData: {},
  }),
  name: "Login",
  props: {
    source: String,
  },
  methods: {
    openLoginDialog(dataFromNavbar) {
      this.loginDialog = true;
      this.loginData = dataFromNavbar;
    },
  },
};
</script>
