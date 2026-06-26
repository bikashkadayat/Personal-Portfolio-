// Import only the icons that are actually used in the switch statement
import afterEffects from '../app/assets/svg/skills/after-effects.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import illustrator from '../app/assets/svg/skills/illustrator.svg';
import ionic from '../app/assets/svg/skills/ionic.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import lightroom from '../app/assets/svg/skills/lightroom.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import nuxtJS from '../app/assets/svg/skills/nuxtJS.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import sketch from '../app/assets/svg/skills/sketch.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';

// Removed unused imports (like svelte, vue, aws, etc.)

export const skillsImage = (skill) => {
  if (!skill) return null;

  const skillID = skill.toLowerCase().trim();

  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
    case 'nextjs':
      return nextJS;
    case 'nuxt js':
    case 'nuxtjs':
      return nuxtJS;
    case 'angular':
      return angular;
    case 'tailwind':
      return tailwind;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'wordpress':
      return wordpress;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'django':
      return django;
    case 'fastapi':
      return fastapi;
    case 'prisma':
      return prisma;
    case 'nodejs':
    case 'node js':
      // Add import if you have node.svg later
      return null;
    case 'postgresql':
      return postgresql;
    case 'mysql':
      return mysql;
    case 'mongodb':
      return mongoDB;
    case 'git':
      return git;
    case 'docker':
      return docker;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'nginx':
      return nginx;
    case 'figma':
      return figma;
    case 'photoshop':
      return photoshop;
    case 'illustrator':
      return illustrator;
    case 'after effects':
      return afterEffects;
    case 'premiere pro':
    case 'premierepro':
      return premierepro;
    case 'lightroom':
      return lightroom;
    case 'canva':
      return canva;
    case 'blender':
      return blender;
    case 'flutter':
      return flutter;
    case 'java':
      return java;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'kotlin':
      return kotlin;
    case 'matlab':
      return matlab;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'memsql':
      return memsql;
    case 'microsoft office':
    case 'ms office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'ionic':
      return ionic;

    // Add more cases here in the future easily

    default:
      console.warn(`No icon found for skill: ${skill}`);
      return null;
  }
};