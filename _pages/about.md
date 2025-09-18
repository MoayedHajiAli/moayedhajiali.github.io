---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello there! I am **Moayed Haji Ali**, a PhD student in Computer Science at Rice University, working on multimodal generative modeling under the supervision of [Prof. Vicente Ordonez](https://www.cs.rice.edu/~vo9/). I am currently a Research Intern at the amazing **Snap Inc.'s Creative Vision Team**, working with [Willi Menapace](https://www.willimenapace.com/), [Aliaksandr Siarohin](https://aliaksandrsiarohin.github.io/aliaksandr-siarohin-website/), and [Sergey Tulyakov](https://stulyakov.com/)  where I work on generative AI research. Prior to my PhD, I obtained my undergraduate degree from Koç University, in Turkey, where I worked with [Prof. Aykut Erdem](https://aykuterdem.github.io/).

My research interests focus on **image, video, and audio generation** and **cross-modal generation**. I am particularly interested in bringing new capabilities to existing generative models. 


# 🔥 News
- *2025.09*: &nbsp;🎉🎉 **[DFM](https://snap-research.github.io/dfm/)** was accepted at **NeurIPS 2025**
- *2025.09*: &nbsp;🎉🎉 **[CFred](https://arxiv.org/abs/2503.21721)** was accepted at **WACV 2026**
- *2025.06*: &nbsp;📄 [New Work] **[DFM](https://snap-research.github.io/dfm/)** published on [arXiv](https://arxiv.org/abs/2506.19839)
- *2025.06*: &nbsp;🎉🎉 **[AV-LINK](https://snap-research.github.io/AVLink/)** was accepted at **ICCV 2025**
- *2024.12*: &nbsp;📄 [New Work] **[AV-LINK](https://snap-research.github.io/AVLink/)** published on [arXiv](https://arxiv.org/abs/2412.15191)
- *2024.06*: &nbsp;📄 [New Work] **[GenAU](https://snap-research.github.io/GenAU/)** published on [arXiv](https://arxiv.org/abs/2406.19388)
- *2024.06*: &nbsp;🎉🎉 **[ElasticDiffusion](https://elasticdiffusion.github.io/)** paper presented at **CVPR 2024**
- *2024.03*: &nbsp;🚀 Joined **Snap Inc. Creative Vision Team** as Research Intern
- *2023.11*: &nbsp;📄 [New Work] **ElasticDiffusion** preprint released on [arXiv](https://arxiv.org/abs/2311.18822)
- *2023.10*: &nbsp;🎉🎉 **[VidStyleODE](https://cyberiada.github.io/VidStyleODE/)** presented at **ICCV 2023**
- *2023.08*: &nbsp;🚀 Started PhD journey at Rice University under Prof. Vicente Ordonez
- *2023.06*: &nbsp;🚀 Graduated from Koc University, third in my department.



# 📝 Preprints



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2024</div><video width="100%" autoplay loop muted><source src="assets/teasers/genau.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[Taming Data and Transformers for Audio Generation](https://snap-research.github.io/GenAU/)

**Moayed Haji-Ali**, Willi Menapace, Aliaksandr Siarohin, Guha Balakrishnan, Sergey Tulyakov, Vicente Ordonez

[**Project**](https://snap-research.github.io/GenAU/) | [**arXiv**](https://arxiv.org/abs/2406.19388) <strong><span class='show_paper_citations' data='Ck-mSEwAAAAJ:GenAU'></span></strong>
- Introduces AutoCap for automatic audio captioning and GenAu architecture for scalable transformer-based audio generation.
</div>
</div>

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><video width="100%" autoplay loop muted><source src="assets/teasers/dfm.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[Improving Progressive Generation with Decomposable Flow Matching](https://snap-research.github.io/dfm/)

**Moayed Haji-Ali**, Willi Menapace, Ivan Skorokhodov, Arpit Sahni, Sergey Tulyakov, Vicente Ordonez, Aliaksandr Siarohin

[**Project**](https://snap-research.github.io/dfm/) | [**arXiv**](https://arxiv.org/abs/2506.19839) <strong><span class='show_paper_citations' data='Ck-mSEwAAAAJ:DFM'></span></strong>
- Framework for progressive generation of visual media, improving visual quality for both images and videos through decomposable flow matching.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><video width="100%" autoplay loop muted><source src="assets/teasers/avlink.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[AV-LINK: Temporally-Aligned Diffusion Features for Cross-Modal Audio-Video Generation](https://snap-research.github.io/AVLink/)

**Moayed Haji-Ali**, Willi Menapace, Aliaksandr Siarohin, Ivan Skorokhodov, Alper Canberk, Kwot Sin Lee, Vicente Ordonez, Sergey Tulyakov

[**Project**](https://snap-research.github.io/AVLink/) | [**arXiv**](https://arxiv.org/abs/2412.15191) <strong><span class='show_paper_citations' data='Ck-mSEwAAAAJ:AV-LINK'></span></strong>
- Unified framework for video-to-audio and audio-to-video generation, leveraging frozen diffusion models for temporally-aligned cross-modal conditioning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='assets/teasers/elasticdiffusion.jpg' alt="ElasticDiffusion" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ElasticDiffusion: Training-free Arbitrary Size Image Generation through Global-Local Content Separation](https://elasticdiffusion.github.io/)

**Moayed Haji-Ali**, Guha Balakrishnan, Vicente Ordonez

[**Project**](https://elasticdiffusion.github.io/) | [**arXiv**](https://arxiv.org/abs/2311.18822) <strong><span class='show_paper_citations' data='Ck-mSEwAAAAJ:roLk4NBRz8UC'></span></strong>
- Training-free method for generating images of arbitrary sizes using pre-trained diffusion models through global-local content separation.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><video width="100%" autoplay loop muted><source src="assets/teasers/vidstyleode.mp4" type="video/mp4"></video></div></div>
<div class='paper-box-text' markdown="1">

[VidStyleODE: Disentangled Video Editing via StyleGAN and NeuralODEs](https://cyberiada.github.io/VidStyleODE/)

**Moayed Haji Ali**, A. Bond, T. Birdal, D. Ceylan, L. Karacan, E. Erdem, A. Erdem

[**Project**](https://cyberiada.github.io/VidStyleODE/) | [**arXiv**](https://arxiv.org/abs/2304.06020) <strong><span class='show_paper_citations' data='Ck-mSEwAAAAJ:UeHWp8X0CEIC'></span></strong>
- A novel framework for modeling videos using pre-trained image generators and learned latent ODEs, enabling high-resolution video editing applications including image animation, guided motion and appearance manipulation, and temporal interpolation.
</div>
</div>


- Jaywon Koo, Jefferson Hernandez, **Moayed Haji Ali**, Ziyan Yang, Vicente Ordonez "Evaluating Text-to-Image Synthesis with a Conditional Fréchet Distance" **WACV 2025**
- Yehya Hassanzadeh-Nazarabadi, **Moayed Haji Ali**, Nazir Nayal "Opera: Scalable Simulator for Distributed Systems" **IEEE INFOCOM 2021**







# 📖 Service
- CVPR 2025, Reviewer
- ECCV 2024, Reviewer
- NeurIPS 2024/2025, Reviewer
- ICLR 2025, Reviewer
- ICML 2025, Reviewer
- IJCV, Reviewer

# 🎖 Honors and Awards
- *2023* Full merit-based scholarship from Al-Ghurair Foundation for Education at Koç University
- *2021* Ranked **3rd** in Computer Science Department at Koç University (CGPA: 3.96/4.0)
- *2020* Huawei Koç University Mobile Development Competition - **1st Place**
- *2020* Project of the Year Award in Software Engineering Analysis and Design Course
- *2019* IEEEXtreme Programming Contest - Top 100 worldwide, **2nd in Turkey**
- *2016* Honorable mention in Asia-Pacific Olympiad of Informatics (APIO)
- *2015-2016* Damascus ACM College Programming Contest - **1st Place** (two consecutive years) 

# 📖 Education
- *2023.08 - Present*, **PhD in Computer Science**, Rice University, Houston, TX
  - Advisor: Prof. Vicente Ordonez
  - Focus: Multimodal generative modeling, computer vision
- *2018.09 - 2023.06*, **Bachelor in Computer Engineering**, Koç University, Istanbul, Turkey
  - **Ranked 3rd** in Computer Science Department  
  - **CGPA: 3.96/4.0** (Full merit-based scholarship from Al-Ghurair Foundation)
  - **Relevant Coursework:** Autonomous Driving, Advances in Deep Learning, Deep Unsupervised Learning, Deep Learning and Computer Vision, Introduction to Machine Learning, Natural Language Processing 

# 💻 Professional Experience

**Research Intern** - *Snap Inc., Creative Vision Team* (Remote)  
*Summer 2024 - Present*
- Working on cutting-edge research in computer vision and generative models
- Contributing to innovative projects in cross-modal generation and creative AI
- Collaborating with world-class researchers on diffusion models and multimodal AI

**Machine Learning Engineer** - *CareX* (Remote, Part-time)  
*April 2023 - August 2023, February 2021 - January 2022*
- Developed AI-based methods for blood pressure estimation from fingertip videos
- Contributed to HRV estimation technology deployed in CareX's SDK
- Implemented PyTorch and TensorFlow frameworks for model integration and visualization

**Computer Vision Research Intern** - *KUIS AI LAB* (Istanbul, Turkey)  
*July 2021 - July 2023*
- Led research project on video modeling and manipulation using StyleGAN2 and Latent ODEs (VidStyleODE - ICCV 2023)
- Developed text-guided image manipulation methods using multimodal neural networks
- Implemented baselines for image manipulation based on CLIP and TokenGAN

**Research Intern** - *IUI LAB* (Istanbul, Turkey)  
*May 2020 - June 2021*  
- Designed self-supervised feedback system for sketch-based questions under Prof. Metin Sezgin
- Implemented novel transformer-based architecture using TensorFlow

