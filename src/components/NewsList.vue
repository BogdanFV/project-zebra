<template>
  <div class="news-grid container">
    <div v-for="newsItem in newsList" :key="newsItem.code" class="news-card">
      <div :class="{ 'news-image-placeholder': !newsItem.image }">
        <img
          v-if="newsItem.image"
          :src="newsItem.image"
          alt="News Image"
          class="news-image"
        />
      </div>
      <div class="news-content">
        <div class="news-date">
          <p class="news-day">{{ formatDay(newsItem.date) }}</p>
          <p class="news-month-year">{{ formatYearAndMonth(newsItem.date) }}</p>
        </div>
        <h2 class="news-title">{{ newsItem.name }}</h2>
        <p class="news-preview">{{ newsItem.previewText }}</p>
        <div class="news-type">
          <p class="news-type__text">{{ newsItem.type.value }}</p>
        </div>
      </div>
    </div>
  </div>
  <button
    @click="loadMoreNews"
    class="load-more__button"
    v-if="showLoadMoreButton"
  >
    Загрузить ещё
  </button>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      currentPage: 1,
      totalPageCount: 1,
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await fetch(
          `https://flems.github.io/test/api/news/${this.currentPage}/`
        );
        const data = await response.json();
        this.newsList = this.newsList.concat(data.items);
        this.totalPageCount = data.nav.total;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    loadMoreNews() {
      if (this.currentPage < this.totalPageCount) {
        this.currentPage++;
        this.fetchNews();
      }
    },
    formatDay(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString("en-US", { day: "numeric" });
    },
    formatYearAndMonth(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    },
  },
  computed: {
    showLoadMoreButton() {
      return this.currentPage < this.totalPageCount;
    },
  },
};
</script>

<style lang="scss" scoped>

$color-brend-primary: #0f62fe;
$link-link-color-default: #0c5bef;
$border-radius: 16px;
$grey-color-black-85: #222327;
$link-link-dark-default: #00133a;
$radius-m: 16px;
.news-grid {
  display: grid;
  grid-column-gap: 48px;
  grid-row-gap: 64px;
  margin: 72px auto;

  .news-card {
    border-radius: var(--radius-m, 16px);
    border: 1px solid var(--color-brend-primary, #0f62fe);

    overflow: hidden;
    display: flex;
    flex-direction: column;

    .news-image-placeholder {
      width: 100%;
      height: 16px;
      background-color: transparent;
    }

    .news-image {
      width: 100%;
    }

    .news-content {
      padding: 32px;
      text-align: left;
      display: flex;
      flex-direction: column;
      height: 100%;
      .news-date {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        color: #a1a7b5;
        .news-day {
          font-size: 36px;
          margin-right: 4px;
          line-height: 100%;
        }
        .news-month-year {
          max-width: 62px;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 110%;
          letter-spacing: -0.15px;
        }
      }
      .news-title {
        color: #0c5bef;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        margin: 16px 0;

        display: flex;
        align-items: flex-start;
        align-self: stretch;
      }
      .news-preview {
        color: var(--grey-color-black-85, #222327);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.2px;
        align-self: stretch;
        margin-bottom: 40px;
      }
      .news-type {
        border-radius: var(--radius-full, 360px);
        background: var(--bg-bg-5, #f0f6fe);
        display: flex;
        flex-grow: 1;
        padding: 4px 16px;
        justify-content: center;
        align-items: center;
        gap: 2px;
        max-height: 28px;
        width: fit-content;
        margin-top: auto;
        .news-type__text {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }
      }
    }
  }
}

.load-more__button {
  width: 203px;
  height: 56px;
  gap: 8px;
  margin: 0 auto 72px;
  border-radius: 8px;
  border: 1px solid var(--button-button-bordered-default, #002dbf);
  color: var(--button-button-bordered-default, #002dbf);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.2px;
  background: none;
}

@media screen and (min-width: 1229px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1228px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 50px;
  }
}

@media screen and (max-width: 876px) {
  .news-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
