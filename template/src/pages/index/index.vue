<template>
  <div @click="clickHandle">
    <div class="userinfo" @click="bindViewTap">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <img
        class="userinfo-avatar"
        src="/static/images/user.png"
        background-size="cover"
      />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <view class="cu-bar bg-white margin-top">
      <view class="action">
        <text class="cuIcon-title text-orange"></text>普通窗口
      </view>
      <view class="action">
        <button
          class="cu-btn bg-green shadow"
          @tap="showModal"
          data-target="Modal"
        >
          Modal
        </button>
      </view>
    </view>

    <view class="cu-modal" :class="modalName == 'Modal' ? 'show' : ''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content">Modal标题</view>
          <view class="action" @tap="hideModal">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view class="padding-xl">Modal 内容。</view>
      </view>
    </view>

    <view class="padding bg-white">
      <view class="cu-progress">
        <view class="bg-red" :style="[{ width: '61.8%' }]">61.8%</view>
      </view>
      <view class="cu-progress radius margin-top">
        <view class="bg-red" :style="[{ width: '61.8%' }]">61.8%</view>
      </view>
      <view class="cu-progress round margin-top">
        <view class="bg-red" :style="[{ width: '61.8%' }]">61.8%</view>
      </view>
    </view>

    <view class="padding flex flex-wrap justify-between align-center bg-white">
      <button class="cu-btn">默认</button>
      <button class="cu-btn round">圆角</button>
      <button class="cu-btn cuIcon">
        <text class="cuIcon-emojifill"></text>
      </button>
    </view>

    <view class="cu-bar bg-white margin-top">
      <view class="action">
        <text class="cuIcon-title text-blue"></text>加载状态
      </view>
      <view class="action">
        <switch @change="isLoading" :class="isLoad ? 'checked' : ''"></switch>
      </view>
    </view>

    <view class="cu-bar bg-white margin-top">
      <view class="action">
        <text class="cuIcon-title text-blue"></text>进度条加载
      </view>
      <view class="action">
        <button class="cu-btn bg-green shadow" @tap="LoadProgress">点我</button>
      </view>
    </view>

    <view class="solids-bottom padding-xs flex align-center">
      <view class="padding">40</view>
      <view class="flex-sub text-center">
        <view class="solid-bottom text-sl padding">
          <text class="cuIcon-roundcheckfill text-green"></text>
        </view>
        <view class="padding">
          <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
        </view>
      </view>
    </view>

    <view class="cu-list menu-avatar comment solids-top">
      <view class="cu-item">
        <view
          class="cu-avatar round"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
        ></view>
        <view class="content">
          <view class="text-grey">莫甘娜</view>
          <view class="text-gray text-content text-df"
            >凯尔，你被自己的光芒变的盲目。</view
          >
          <view class="bg-grey padding-sm radius margin-top-sm text-sm">
            <view class="flex">
              <view>凯尔：</view>
              <view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
            </view>
          </view>
          <view class="margin-top-sm flex justify-between">
            <view class="text-gray text-df">2018年12月4日</view>
            <view>
              <text class="cuIcon-appreciatefill text-red"></text>
              <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
            </view>
          </view>
        </view>
      </view>

      <view class="cu-item">
        <view
          class="cu-avatar round"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
        ></view>
        <view class="content">
          <view class="text-grey">凯尔</view>
          <view class="text-gray text-content text-df"
            >妹妹，如果不是为了飞翔，我们要这翅膀有什么用?</view
          >
          <view class="bg-grey padding-sm radius margin-top-sm text-sm">
            <view class="flex">
              <view>莫甘娜：</view>
              <view class="flex-sub"
                >如果不能立足于大地，要这双脚又有何用?</view
              >
            </view>
          </view>
          <view class="margin-top-sm flex justify-between">
            <view class="text-gray text-df">2018年12月4日</view>
            <view>
              <text class="cuIcon-appreciate text-gray"></text>
              <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      modalName: null,
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      }
    };
  },

  components: {
    card
  },

  methods: {
    showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal() {
      this.modalName = null;
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
