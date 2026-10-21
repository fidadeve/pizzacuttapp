import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function StoreHomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand mb-6">
            Pizza Cut
          </h1>
