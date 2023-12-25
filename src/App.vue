<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>我的作品集</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 顶部导航项 -->
    </v-app-bar>

    <!-- 应用主体内容，包含侧边栏和页面内容 -->
    <v-content>
      <v-container fluid fill-height>
        <v-row no-gutters>
          <!-- 侧边栏 -->
          <v-col cols="12" md="3">
            <v-navigation-drawer app permanent fixed>
              <v-list dense>
                <v-list-item link to="/intro">
                  <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>个人简介</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/resume">
                  <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Resume</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/projects">
                  <v-list-item-action>
                    <v-icon>mdi-briefcase</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-col>

          <!-- 主内容区 -->
          <v-col cols="12" md="9">
            <v-container>
              <!-- 路由出口，对应的组件将在这里被渲染 -->
              <router-view></router-view>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!-- 页脚 -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        © {{ new Date().getFullYear() }} - 我的版权信息
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'AppLayout',
  data: () => ({
    // Data properties here
  }),
};
</script>

<style>
/* 在这里添加自定义样式 */
</style>