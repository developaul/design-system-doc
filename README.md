# Design System Documentation

This repository hosts the compiled Storybook documentation for our design system. It serves as the deployment source for GitHub Pages, providing an accessible and centralized location for our design system documentation.

## Purpose

The primary purpose of this repository is to:

1. Host the built Storybook documentation separately from the main monorepo
2. Enable GitHub Pages deployment without affecting the main development repository
3. Maintain a clean separation between source code and published documentation
4. Provide a dedicated URL for our design system documentation

## Repository Structure

This repository contains the built Storybook files generated from our design system monorepo. The structure is automatically maintained by our CI/CD pipeline, which:

- Cleans the repository (preserving only Git metadata)
- Copies new Storybook built files
- Commits and pushes changes automatically

## Deployment

The documentation is automatically deployed through GitHub Pages from the `main` branch. Our CI/CD pipeline in the main monorepo handles the build and deployment process using GitHub Actions.

### How it Works

1. The Storybook documentation is built in our main monorepo
2. Our GitHub Actions workflow:
   - Builds the Storybook documentation
   - Cleans this repository
   - Copies the new built files
   - Commits and pushes the changes

## Contributing

This repository is automatically updated through our CI/CD pipeline. Manual changes should not be made directly to this repository.

To update the documentation:

1. Make changes to the Storybook documentation in the main monorepo
2. The changes will be automatically built and deployed here through our GitHub Actions workflow

## Access

The documentation is available at: [Add your GitHub Pages URL here]

## Related Repositories

- Main Monorepo: [Add your monorepo URL here]

## Last Updated

This repository is automatically updated whenever changes are made to the Storybook documentation in the main monorepo. Each commit message includes:

- The source commit from the main repository
- The Storybook path
- Build environment details

## Contact

For any questions or issues regarding this documentation, please:

1. File an issue in the main monorepo
2. Contact the development team
