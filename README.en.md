# dhi-format

[中文版本](./README.md)

`dhi-format` is an image format designed for digital holography and multi-view display scenarios. It can store image data for a single viewing angle or multiple viewing angles, while also supporting an `Alpha` channel. It is suitable for applications that require transparency, parallax, and multi-angle visual representation, such as `VR/AR`, digital holographic display, glasses-free `3D`, and `3D lenticular` imaging.

## Overview

Traditional image formats are mainly designed to represent a single 2D image. In holographic display, multi-view rendering, and spatial computing scenarios, however, it is often necessary to store image content from multiple viewpoints at the same time. The goal of `dhi-format` is to provide an image container that is better suited for these use cases:

- It can store a single-angle image for simple display needs
- It can also store multiple viewing angles for parallax or multi-view content
- It supports an `Alpha` channel for transparent backgrounds, compositing, and spatial overlays
- It can serve different stages of the content pipeline, from production to display

## Core Capabilities

### 1. Unified storage for single-view and multi-view content

`dhi-format` can represent either a normal single image or a collection of images captured or rendered from multiple viewing angles of the same object or scene. This allows one format to cover both of the following needs:

- Single-view preview images
- Multi-angle holographic images or viewpoint sequences

For upper-layer applications, this means a single data model can be used to process both simple static images and more complex multi-view content.

### 2. Alpha channel support

`dhi-format` supports transparency information, which is useful for:

- Separating foreground objects from the background
- Overlaying virtual content in `AR` scenes
- Multi-layer image compositing
- Preserving edge details in holographic assets and reducing hard-edge artifacts

Compared with formats that only support opaque pixels, `Alpha` support makes `dhi-format` better suited for spatial display and interactive rendering workflows.

### 3. Built for spatial display and parallax expression

Multi-view data can describe image differences caused by changes in viewer position, which helps support:

- Parallax effects
- Stronger depth perception
- Display adaptation for different viewing directions
- Input content for glasses-free `3D` or lenticular display devices

Because of this, `dhi-format` is more than just an image file. It is better understood as a foundational carrier for spatial visual content.

## Use Cases

`dhi-format` is suitable for:

- `VR/AR` asset storage
- Digital holographic display and holographic asset management
- Packaging multi-view rendering outputs
- `3D lenticular` image generation and distribution
- Glasses-free `3D` content production
- Spatial image libraries that require transparent backgrounds

## Data Organization

A `dhi-format` file can contain:

- Basic metadata
- One or more view image frames
- Angle information or viewpoint indices for each view
- Image dimensions, color data, and `Alpha` information

A typical logical structure can be understood as:

1. File header: identifies format version, encoding method, and global information
2. Metadata section: records dimensions, channel count, number of views, angle parameters, and related properties
3. Image data section: stores the pixel data for one or more views
4. Extension section: reserved for future compression, calibration, device parameters, or rendering parameters

This kind of design makes the format easier to extend and more adaptable to different display devices.

## Design Goals

The design goals of `dhi-format` include:

- Use one unified format for both single-view and multi-view image content
- Preserve transparency information for spatial compositing workflows
- Target real-world use cases such as holography, `AR`, and glasses-free `3D`
- Keep the structure clear and easy to parse, generate, and extend
- Leave room for future compression, calibration, and rendering-related metadata

## How It Differs from Traditional Image Formats

Compared with common image formats such as `PNG`, `JPEG`, and `WebP`, `dhi-format` places more emphasis on multi-view representation and spatial display:

- Traditional formats mainly target single 2D images
- `dhi-format` can natively organize data for multiple viewing angles
- `dhi-format` is more suitable for holographic, stereoscopic, and spatial-computing pipelines
- With `Alpha` support, it integrates more naturally into compositing and rendering systems

## Conceptual Examples

`dhi-format` can be understood like this:

- When it contains only one view, it behaves like a spatial image with transparency support
- When it contains multiple views, it behaves like a set of images organized by viewing angle

For example:

- A product asset may store only a front-facing view
- A holographic presentation asset may include left, center, and right views together
- An `AR` object texture may include both a transparent background and view-dependent image content

## Future Extensions

In the future, `dhi-format` could be extended to support:

- Lossless and lossy compression strategies
- Richer view-angle description methods
- Additional depth or normal data
- Device calibration parameters
- Display-terminal adaptation parameters
- Dynamic multi-view sequences

## Summary

`dhi-format` is an image format designed for multi-view holographic content. It supports both single-angle images and collections of images captured or rendered from multiple angles, while also supporting an `Alpha` channel. It is well suited for `VR/AR`, digital holography, glasses-free `3D`, and `3D lenticular` applications that require spatial display and multi-view representation.

## JavaScript Libraries

The repository now includes a [js/README.md](/home/zbj/dhi-format/js/README.md) directory for JavaScript-related libraries:

- [js/encoder](/home/zbj/dhi-format/js/encoder): encoder library
- [js/decoder](/home/zbj/dhi-format/js/decoder): decoder library

These two libraries currently provide a clean project skeleton and a minimal API surface, making it easier to evolve toward a real binary encoder/decoder implementation later.
