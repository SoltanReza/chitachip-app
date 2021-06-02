import styled from 'styled-components/macro';

export const StyledStoryProduct = styled.section`
  .swiper-container {
    /* margin: 1em 0em 2.2em 2em !important; */
    padding: 1em 1em 1em 1em !important;
  }

  .divStory {
    width: 70px;
    height: 70px;
    border: 4px solid #fbaf4d;
    border-radius: 44px;
    background: gray;
  }

  .ant-modal-body {
    > img {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-position: 50% 50%;
      background-size: cover;
    }
  }
  .imgStory {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
  }

  .swiper-button-next {
    color: #000;
    margin-left: 0.5em;
    left: -14px !important;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev {
    color: #000;
    margin-right: 0.5em;
    right: -14px !important;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 17px;
    padding: 0.4em;
    font-weight: bold;
  }

  #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  #myImg:hover {
    opacity: 0.7;
  }

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  }

  /* Modal Content (image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation */
  .modal-content,
  #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
`;
