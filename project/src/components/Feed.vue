<template>
  <v-app>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
              <v-card
                max-width="1440"
                class="mx-auto mt-15"
                v-for="item in feedList"
                :key="item.userName"
              >
                <v-list-item>
                  <v-list-item-avatar color="grey">
                    <img :src="item.userIcon" alt="">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{item.userName}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-img
                  :src="item.imgSrc"
                  height="auto"
                ></v-img>

                <v-card-text>
                  <h4>{{item.userName}}</h4>
                  {{item.userDescription}}
                  <hr>
                </v-card-text>

                <v-card-text 
                  class="userComments"
                  v-for="comment in item.userComments"
                  :key="comment.user"
                >
                  <h4>{{comment.user}}</h4>
                  <p>{{comment.comment}}</p>
                </v-card-text>

                <v-card-actions>
                  <v-container row>
                    <v-text-field
                      label="Напишите сообщение"
                      single-line
                      outlined
                    ></v-text-field>
                    <v-btn icon>
                      <v-icon>mdi-send</v-icon>
                    </v-btn>
                  </v-container>
                </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Levkin_hookah',
      userDescription: 'Это просто ахуенное место на планете!',

      feedList: [
        {
          userName: 'FeedAcc1',
          userDescription: 'FeedDescript1',
          userIcon: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg' ,
          imgSrc: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
          userComments: [
            {
              user: 'zhilon32',
              comment: 'найс картинка',
            },
            {
              user: 'volodya_redin',
              comment: 'хуета какая-то',
            }
          ],
        },

        {
          userName: 'FeedAcc2',
          userDescription: 'FeedDescript1',
          userIcon: 'https://tipik.ru/wp-content/uploads/2019/07/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9_023.jpg' ,
          imgSrc: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg',
          userComments: [
            {
              user: 'account_devuggef',
              comment: 'Прикольные хуевины',
            },
            {
              user: 'newx_nbkkk',
              comment: 'ЧТО ЭТО ТАКОЕП???',
            },
            {
              user: 'addidas_russia',
              comment: 'Удалите пожалуйста',
            }
          ],
        },

        {
          userName: 'FeedAcc3',
          userDescription: 'FeedDescript1',
          userIcon: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2' ,
          imgSrc: 'https://free4kwallpapers.com/uploads/originals/2019/12/31/journey-painting-wallpaper.jpg',
          userComments: [
            {
              user: 'Soldatov_Artem',
              comment: 'найс картинка, но я бы лучше сделал',
            },
            {
              user: 'petrynin_vlad',
              comment: 'Классно!',
            }
          ],
        },
      ]
    };
  },
};
</script>

<style>

</style>
