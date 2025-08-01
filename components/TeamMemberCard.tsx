import { TeamMemberCardProps } from '@/types'

export default function TeamMemberCard({ member, className = '' }: TeamMemberCardProps) {
  const profilePhoto = member.metadata?.profile_photo
  const specialties = member.metadata?.specialties

  return (
    <div className={`card text-center p-6 ${className}`}>
      {/* Profile Photo */}
      {profilePhoto && (
        <div className="mb-4">
          <img
            src={`${profilePhoto.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={member.metadata?.full_name || member.title}
            width="120"
            height="120"
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        </div>
      )}

      {/* Name and Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {member.metadata?.full_name || member.title}
      </h3>
      {member.metadata?.job_title && (
        <p className="text-primary-600 font-medium mb-4">
          {member.metadata.job_title}
        </p>
      )}

      {/* Bio */}
      {member.metadata?.bio && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-4">
          {member.metadata.bio}
        </p>
      )}

      {/* Experience */}
      {member.metadata?.years_experience && (
        <p className="text-sm text-gray-500 mb-4">
          {member.metadata.years_experience} years of experience
        </p>
      )}

      {/* Specialties */}
      {specialties && specialties.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        {member.metadata?.email && (
          <a
            href={`mailto:${member.metadata.email}`}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        )}
        {member.metadata?.linkedin_url && (
          <a
            href={member.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </a>
        )}
        {member.metadata?.twitter_url && (
          <a
            href={member.metadata.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}