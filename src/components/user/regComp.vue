<template>
  <v-dialog v-model="regDialog" app width="40vh">
    <v-card class="elevation-12">
      <v-toolbar color="primary" class="elevation-1">
        <v-toolbar-title>Registration</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pt-10"
        ><h3>
          To create an account please fill out the forms below.
        </h3></v-card-text
      >
      <v-card-text>
        <v-form text-align-left>
          <v-col></v-col>
          <v-col>
            <label for="firstname"
              ><strong><h3>Your first and last name</h3></strong></label
            >

            <v-text-field
              id="firstname"
              name="firstname"
              label="First name"
              type="text"
            ></v-text-field>
            <v-text-field
              id="lastname"
              name="lastname"
              label="Last name"
              type="text"
              class="pb-10"
            ></v-text-field>
            <label for="username"
              ><h3><strong>Username and password</strong></h3></label
            >
            <v-text-field
              name="username"
              label="Username"
              type="text"
              class="mt-5"
            ></v-text-field>
            <v-text-field
              id="password"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/" plain>Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    regDialog: false,
    regData: {},
  }),
  methods: {
    openRegDialog(dataFromNavbar) {
      this.regDialog = true;
      this.regData = dataFromNavbar;
    },
  },
};
</script>
