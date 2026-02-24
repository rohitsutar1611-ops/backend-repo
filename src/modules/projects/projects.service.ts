
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

  async create(data: CreateProjectDto) {
  return this.prisma.project.create({
    data: {
      title: data.title,
      domain: data.domain,
      description: data.description,
      techStack: data.techStack,
      githubLink: data.githubLink,
      liveLink: data.liveLink,
      imageUrl: data.imageUrl,
    },
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