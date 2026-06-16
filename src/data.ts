import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Glow Serum',
    price: 45.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG-T0fCFfI7UoApugRet8gDgCl_EvxGdYNESrYF_YqkmHII-fEsWBUPLpLY-pP_pDnW9qlrmS61qm3vhp1cpF7kBuO3LcGMg2t-L_spbX7op29ISxp_G0LWwHlGA7z5QANbj-_LPx_FRDgQAI5rFYOdIbR91oSnWlGnpv6UEszHoEypLn8zVpWQFEGwFXDScaNCBr9fHUmhKPTx4CP0PbMA_FRC1XLc5_Og7UCueYI7v2DbC-m08JZZqVSBD92X630T3a9hJmJ5lY',
    description: 'Serum nafaqaysan oo laga sameeyay Saliidda Qasil iyo Vitamin C si maqaarku u dhalaalo.',
    tag: 'Iibka ugu Fiican'
  },
  {
    id: '2',
    name: 'Shea Butter Cream',
    price: 32.00,
    category: 'Jirka',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBngeH7C-pB7Ujss8znoHUnBC5fH0lLGiFMthKW8ZYFAvx2uUre2jHbtjXt2KeaT7UW34eqgBYqql5mRbCm8VuHD6hdpsqlDNhayStABbemyBc8_cR3YtugCcpxHJUzEmlWK2bowznD9N2MG0x3RlQrhTqvveFAHNWdUQWWsDLYdBZoykwB415kap_1Rgsj9T7I5i-Oege00PGvzCFFz9XjV-fbXGGzhC41txGsFm2sljiNG-59-C8_kSK0KF4EpFHQlcL9y_t_S3s',
    description: 'Labeen qani ah oo ka timid Shea dabiici ah, oo maqaarka ka dhigaysa mid jilicsan.'
  },
  {
    id: '3',
    name: 'Saliidda Malmalka',
    price: 58.00,
    category: 'Saliidaha',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdXTujGBSl1YntS0ZL6qvcgq6lxszQ4BIRkST_e_ejaubUck_dOOuHUeFO1gQTiUGzFcJYtwgaCbmn1Sh6qel5VCYAB1Zc9PqUDwTgdtZbvoBhJp2Yd4U41c5jXVC3qzGA8sVueTXKeLm_sXZLghQxjbHKx0M-jBqbjP8G-OiSxeuuhK9sNbNhQXjrx9kI2xbAJmchajiFo7dGnhGwcGV9EF007ltso9f1FN_4N4kMVjYZ291gTyn9S2eocNWxy_GYhGKYSFaGVDM',
    description: 'Saliid dabiici ah oo ka kooban Frankincense, oo bogsiisa calaamadaha gabowga.'
  },
  {
    id: '4',
    name: 'Qasil Cleanser',
    price: 25.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJrSTPI6f9NbZrTL88Hr-HbfFo-86uX01Q1k3rZHNkXGQtmFFzBr7J_8MZ7idjOnTI856-K7VkbqKSccoL_ok9GcD9OtDzocdKv1Udd69xW0_g25P66KVP1Jular-3xmjtOqTdd5aCvQbwZrABOmPRknUwZ9xPWYjAuDWUAr4w8Jm9gF_kkpeXn9-YAv2LC-4zOj-p3kfqRh8Jnaqjvo_IS6YwrOF7I9oMlUa0lUhAJRRGOe3ZdPYlWWA1JJ2rSn6k-gfEYonMu7w',
    description: 'Budada dhaqanka ee Qasil oo loo beddelay nadiifiye casri ah oo wejiga ah.'
  },
  {
    id: '5',
    name: 'Night Repair Oil',
    price: 64.00,
    category: 'Saliidaha',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdBGcPAYwL9eVsPPU0Ybndo0M6-cY9LAgJybJxq5EXSgq_g1eiB6-WfXaGByLdG8vVU-xfE5Y9EH0whaec1DimQxnXnwkKqW-aAFTIgez-e6Wmw02i9miCkagxN6P-pECGlGltWL4LpXKvnb1RBi4Y4YwFCq17nhBErwVhN9R7to3B9W8hnk2KfvLdhyPdELjt61kbF-Lc7CVo6At2quNtdTnlGM1YQkbN8dZtSVv9v5irq1MBMarIRUKf5eI_PUy1z2OFRDT7bgk',
    description: 'Saliid habeenkii la isticmaalo oo cusboonaysiisa unugyada maqaarka inta aad huruddo.'
  },
  {
    id: '6',
    name: 'Body Silk Lotion',
    price: 38.00,
    category: 'Jirka',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-ReHUBpFpoWhJYkjd89Rl2SAybwX0wWUmiyGlkCCZKWImwbogPTmQltEu2J36HA2Mvr4r0FmBUBsHc16VTMuSbxYRA5DjFAd--n9Ekf1m6t0pVCMMN-v2Jf-vkQV_dGYnlFW7qYDEvCsnNG9P3a5d7hOWz1X5B1YA02at5WPlx4TuojaknhRct5LfinnW1t2UsXRn-dJwcuyi6RsoZoeO8EGFCxZhszPMVDzR8ZhaBAEwJSTQC_zlru-Jnec1NOqiQvBe1PKOIYs',
    description: 'Lotion fudud oo si degdeg ah u nuugma, maqaarkana siinaya dhalaal xariir ah.'
  },
  {
    id: '7',
    name: 'Organic Toner',
    price: 28.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfdX6LYwuwtF2IT7gMkdrcLXdiNOBPZPR5EG-NrfchrAiRzO__GLAi9HOut36mKSmk-AU7ZnbRi1Ittu3Bb5Eoqv_5RtdYWY9-qz-PPenDnKKzzA4wVXgxkuKu4eYY2PEQIK4Gqiw4fZewaIjXYzfrK15Gf4z102YUQbTrpEv8kw0WAjww3v1hFtfqtpWWiYJkH6wRkKEU01XkYw2dKNDQPtdNsetTb86h70bz1t88niHyAIlN11sMLZDiLd7xWCJaMzDuSBKLQ_I',
    description: 'Toner dabiici ah oo soo celiya miisaanka PH ee maqaarkaaga.'
  },
  {
    id: '8',
    name: 'Green Clay Mask',
    price: 35.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB278eUaf_LREAc03qGF1wqiPpLbpe0SHL0bt0BAHaLg_GfhX9vUA_Vp4-uhJ1Gf5gw-7d5tAW2oUF0tKrFHlFx8uxlE2jCE1CKbHAB-FhRT6BH91Fim5jzUlaWSNF59wZ4SLTC_dftq24c18HvZ-3g9Cl22hEB7rWyQZj7IeNGciosaCbcE6s-dvr6w2S4AWVe48pi3EO3oRT0b_vsWTF3WLrmUjsIGfMKVWfjvQjxutnzOFnuRFvrNK7OQk5rJMFl-a6uUsYOUDI',
    description: 'Maaskar ka nadiifiya sunta iyo wasakhda daloolada maqaarka.'
  },
  {
    id: '9',
    name: 'Dahab Serum',
    price: 45.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7kDHnRxq8ZSXse91_C4DLq6TMvJKiy06PDa8UjMD-a4bzA7ftGWFqFOz99cJPgfQtdO5poYqJ5mKLEypWtQOKIelRQ6fiAghzSjxkapuzghYPGMEAn5dWfIvnNqPiIvphFOHwOvK7112i0kOJZ-BqHHsCixdVwnqfYY0mOd5AKrX1sqKQTgzdfEXNHEhNrMuNGZGD1SRxxR7Jq-BwuAt7zDvIYS2LcjiQ0noApWkh1j-gSHd4NEiKkRsxCbF-Ph71EjvtvegoagQ',
    description: 'Serum qaali ah oo ka kooban dahab dareere ah iyo geedo dabiici ah oo daryeela maqaarka.',
    tag: 'Cusub'
  },
  {
    id: '10',
    name: 'Qasil Glow Mask',
    price: 38.00,
    category: 'Wajiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLG74QCgBGxR6dlngb4SN1RvI3zPcPlODkmoGXvnoiPbWvK1v4Du9_znVpGuZbrWkjXkMcW1XfImhTpAzJrNg7hEGYyPxQYz-8kSv37R7UdfZ4lMUfJ4GGKiWt8F2X4gq8_wP-GmYSt50MnYE9m56sax3kn4ZKhFIdfhxgi1BpyBr3L9gXf5WAZUphLkfhXyGRhGlg-kVVj8NyNN0q2AeSTTgABS1TKnlr-GG31Gwy3pQNv6HRPSkBsJhJPCtzMR72RVgAqiJ0MM',
    description: 'Maaskar ku salaysan caleenta Qasilka oo dabiici ah oo ka saara unugyada dhintay una yeela dhalaal.'
  },
  {
    id: '11',
    name: 'Uunsi Face Mist',
    price: 29.00,
    category: 'Saliidaha',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVSSH5sWwNS6ddPK_OHdo6lvAXS1VjOvVeiWlBUYmxXBHdRaq1LPvHhC4NB-Divvl3rA28uYPuhfViM6dcOHLrJY7N7QyVEfgGGSkvEtsmlf9rDnYzk5rSqZZhzb-m3ZI9aWMrLCsH1vi4Fof3TnymX5I00AWtid_HYTchRsXKp7XqiUR50pLZq3-WFq5Gkl0X6ziu38KyWTspCm18yahzoZ55l3r2KVHTlj2s_69Ht1mhp10AmMy2-Cws4UOsoFWwJn4hkNZ5ogQ',
    description: 'Miriir uunsi udgoon oo dumiya maqaarka una yeela degaanaansho iyo qurux.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"Tan iyo markii aan bilaabay isticmaalka Som Skin Glow, maqaarkaygu waligii uma dhalaalin sidatan. Waa mid dabiici ah oo aan ku kalsoonahay."',
    author: 'Leyla Axmed',
    role: 'Macmiil Daacad Ah',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQztVeHtPkxkHuAfJtKrcs45OkKNJt0HyoOGjgp6OFEoF_cnwcfCpOy5Z0L_mSw02-CfNOB-XTaIlDzJC_aFLqXnt8cRc8xPVA3QTpVJw7325QJMWAXkutjAS_JAlmWBck4R5970T1USZDj4Lr-uPNnNwH6T2zEPNQxgtrxac0Yi7mKkjCZkREE8Tv84joU_597KrOgNIkrUMAH9vA7iTLC44AgL0S8Ah5hbFrRe2cPqSP6rLF4GxCQ4ffkvk2hlPW1F5qw2mmnbQ'
  },
  {
    quote: '"Geedka fooxa ee buuraha Cal Madow ilaa caleenta Qasilka, alaabtooda maqaarka waxay dib ii xasuusiyeen sirta quruxda ee ayeeyooyinkeen."',
    author: 'Nimco Shariif',
    role: 'Agaasime Muqdisho',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqXginN4gRp2C1CHOHoFl36B5awnMdTifmiGPwb628HkQZ2XMCwDhzbEgmRUo_uBe4FLsSouYMmwo-Kdg9B4qiV7JczWbxFzU2iy0fV5OLHtLl7A-Q-I9TviP0ETt6_4mVKcclZfTORm1pFnti1yPas0NzAOodVYKRfJQ7BySuVjxa35lgp9LISs3GUyCgIK6euYRizP-1ZCaYuO4LJVBmcdvHP-TP_8h4ClCGPFJ5AtGt_6kWja61rwtD57DL2p-KEPCJ64VKqe0'
  }
];
