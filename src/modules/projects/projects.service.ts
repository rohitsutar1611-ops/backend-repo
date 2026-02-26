
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async create(data: {
    title: string;
    domain: string;
    description: string;
    techStack: string;
    githubLink?: string;
    liveLink?: string;
    imageUrl?: string;
  }) {
    return this.prisma.project.create({
      data,
    });
  }
  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }
  async update(id: string, data: any) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return this.prisma.project.update({
      where: { id },
      data,
    });
  }
  async remove(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return this.prisma.project.delete({
      where: { id },
    });
  }
}