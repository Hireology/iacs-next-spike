import styled from "styled-components";

export const BasicTemplateStyles = styled("div")`
  body {
    color: ${({ styles }) => styles.textColor || "#000000"};
    line-height: 1.8em;
  }

  h1,
  h2 {
    color: ${({ styles }) => styles.brandColor || "#97ca41"};
    font-weight: 300;
    margin-top: 0;
  }
  h2 {
    font-size: 2em;
  }

  a {
    color: ${({ styles }) => styles.linkColor || "#000000"};
  }

  img {
    max-width: 100%;
  }

  .container {
    padding: 0 1em;
  }

  .button {
    background-color: ${({ styles }) => styles.brandColor || "#97ca41"};
    color: #fff;
    display: inline-block;
    padding: 10px 80px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .table {
    margin: 1em auto;
    width: 50%;

    thead {
      text-transform: uppercase;
      font-size: 0.8em;
    }

    tbody {
      tr {
        border-bottom: 1px solid
          ${({ styles }) => styles.textColor || "#000000"};

        &:last-child {
          border-bottom: none;
        }

        td {
          padding: 30px 0;
        }
      }
    }
  }

  .content {
    padding: 4em 0;
    text-align: center;
  }

  .content--shaded {
    background-color: ${({ styles }) => styles.backgroundColor || "#000000"};
  }

  .content--brand {
    background-color: ${({ styles }) => styles.brandColor || "#97ca41"};
    color: #fff;

    h2 {
      color: #fff;
    }
  }

  .text__list {
    &::nth-of-type(3n + 1) {
      clear: both;
    }

    .text__item {
      margin-bottom: 0;
    }
  }

  .image__list {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      margin: 10px 20px;

      img {
        margin-bottom: 20px;
      }
    }
  }

  // HEADER
  .header {
    margin: 1em 0;

    .header__logo {
      img {
        max-width: 150px;
      }
    }

    .header__navigation {
      margin-top: 0.5em;
      text-align: right;

      a {
        display: inline-block;
        font-size: 0.8rem;
        margin: 0 5px;
        padding: 0 15px;
        text-decoration: none;
        text-transform: uppercase;

        &.header__button {
          border: 1px solid ${({ styles }) => styles.linkColor || "#000000"};
          border-radius: 3px;
          margin-right: none;
        }
      }
    }
  }

  // HERO
  .hero,
  .hero--sub {
    background: ${({ styles }) => styles.brandColor || "#97ca41"}
      url("https://picsum.photos/1800/700") no-repeat center center;
    background-size: cover;
    color: #fff;
    height: 400px;
    padding-top: 7em;
    text-align: center;
    width: 100%;
    position: relative;

    .hero {
      &-tint {
        background-color: ${({ styles }) => styles.brandColor || "#97ca41"};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        opacity: 0.3;
      }

      &__content {
        position: relative;
        z-index: 1;
      }

      &__title {
        color: #333333;
      }

      &__subtitle {
        margin-bottom: 3em;
      }
    }
  }

  // FOOTER
  .footer {
    background-color: ${({ styles }) => styles.brandColor || "#97ca41"};
    color: #fff;
    padding: 4em 0;

    a {
      color: #fff;
    }

    .footer__social-media {
      text-align: right;

      a {
        background-color: ${({ styles }) =>
          styles.backgroundColor || "#000000"};
        border-radius: 15px;
        color: ${({ styles }) => styles.textColor || "#000000"};
        display: inline-block;
        font-size: 15px;
        height: 30px;
        margin-left: 5px;
        padding-top: 2px;
        text-align: center;
        width: 30px;
      }
    }

    .footer__contact-info {
      text-align: center;
    }
  }
`;
