---
order: 1
title: "MS-DPT: Multi-Sensor aided Deep Pose Tracking"
excerpt: "A hybrid approach of deep learning and analytical model-based algorithms for online object 6D pose estimation"
tagline: "[Hojun Lee](https://scholar.google.com/citations?user=SLpPgLYAAAAJ&hl=en&oi=sra), [Tyler Toner](https://scholar.google.com/citations?user=NKTX6H4AAAAJ&hl=en), [Dawn Tilbury](https://scholar.google.com/citations?user=8P0XsUgAAAAJ&hl=en), [Kira Barton](https://scholar.google.com/citations?user=RXmPJqsAAAAJ&hl=en)" University of Michigan, Ann Arbor
tags: Robotics AI State_Estimation
header:
  teaser: /assets/images/porfolio/MS-DPT.png
  overlay_image: /assets/images/porfolio/Log2.gif
  overlay_filter: 0.4
gallery:
  - url: /assets/images/porfolio/MS-DPT.png
    image_path: /assets/images/porfolio/MS-DPT.png
    alt: "MS-DPT"
last_modified_at: 2022-12-05T11:59:26-04:00
toc: true
toc_sticky: true
---

# Abstract
Accurate pose estimation of nearby objects is critical for robots to dynamically
interact with their surroundings. The complexity of this task has led researchers to explore deep
learning methods. Nowadays, many works have solely focused on developing complicated neural
network architectures to estimate pose from a simple monocular camera. However, most of these
methods struggle with inherent limitations of a single sensor system, like occlusion, which are
commonly encountered in mobile robotics applications. Online, occlusion-robust pose estimation
is extremely important in such cases, as mobility of a robot introduces major uncertainty that
complicates manipulation. 

{% include gallery caption="The MS-DPT architecture: The system detects symmetrical objects without any texture using ASUS Xtion Pro
Live on the Human Support Robot (HSR). Masks generated from a CNN with an RGB image are overlaid on a
depth image to construct partial point clouds with labels. Each point cloud goes through a registration process to
estimate poses of the objects with respect to the robot’s base. These poses are fused with the robot’s odometry to
enhance their accuracy." %}

Hence, we present Multi-Sensor aided Deep Pose Tracking (MS-DPT), a 
framework for online object pose estimation to enable robust mobile manipulation. A Convolutional 
Neural Network (CNN) identifies key objects in an RGB-D image, from which object pose estimates 
are generated using a variant of the Iterative Closest Point (ICP) algorithm. An extended Kalman 
filter is used to fuse this pose estimate with onboard motion sensors to compensate for occlusion 
and robot motion during manipulation. This three stage method focuses on cohering different modalities 
and algorithms to improve the pose tracking stability and continuity in cases where the target 
object becomes heavily occluded by an obstacle or a mobile robot itself. The proposed approach 
accurately tracks textureless objects with high symmetries while operating at 10 FPS during experiments.

<!-- # Conference
<iframe src="https://drive.google.com/file/d/1LQyA4sq_oKebqDFc3Gnt5M3VG4GPoY-2/preview" width="640" height="480" allow="autoplay"></iframe> -->

{: .text-center}
<a href="https://www.sciencedirect.com/science/article/pii/S2405896322028488" class="btn btn--primary btn--large"><i class="fas fa-file-pdf"></i> IFAC</a>
<a href="https://drive.google.com/file/d/1LQyA4sq_oKebqDFc3Gnt5M3VG4GPoY-2/preview" class="btn btn--primary btn--large"><i class="fa-caret-square-o-right"></i> Conference</a>
