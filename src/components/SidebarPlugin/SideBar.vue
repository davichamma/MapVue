<template>
  <div :class="['sidebar']">
    <div class="sidebar-wrapper bg-harpia" id="style-3">
      <div class="logo">
        <a
          href="https://harpia.tech/"
          aria-label="sidebar mini logo"
          class="simple-text logo-mini"
        >
          <div class="logo-img" :class="{ 'logo-img-rtl': $rtl.isRTL }">
            <img
              src="https://harpia.tech/img/eagle-eyes-trabalhado-branco.svg"
              alt=""
            />
          </div>
        </a>
        <a href="https://harpia.tech/" class="simple-text logo-normal">
          {{ title }}
        </a>
      </div>
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon"
          >
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink";

export default {
  props: {
    title: {
      type: String,
      default: "HawkEye",
    },
    backgroundColor: {
      type: String,
      default: "vue",
    },
    activeColor: {
      type: String,
      default: "success",
      validator: (value) => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink,
    };
  },
  components: {
    SidebarLink,
  },
  computed: {
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex;
    },
    shortTitle() {
      return this.title
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();
    },
    sidebarBackgroundColorClass() {
      return `bg-${this.backgroundColor}`;
    },
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false,
      links: [],
    };
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode);
      this.links.splice(index, 0, link);
    },
    removeLink(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    },
  },
  mounted() {
    this.$watch("$route", this.findActiveLink, {
      immediate: true,
    });
  },
};
</script>

<style scoped>
.bg-vue {
  background-color: #42b983;
}
.bg-white {
  background-color: #ffffff;
}
.bg-black {
  background-color: #000000;
}
.bg-harpia {
  background-color: #000F20;
}
/* Add more color styles as needed */
</style>
