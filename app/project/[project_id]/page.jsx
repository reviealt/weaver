'use client'

export default async function ProjectPage({ params }) {
  const { project_id } = await params;
  return <div>My Post: {project_id}</div>
}